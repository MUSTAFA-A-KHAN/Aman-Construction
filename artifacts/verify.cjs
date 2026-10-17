// Local browser QA. Install playwright and @axe-core/playwright in a temporary
// directory and set QA_NODE_MODULES to that directory's node_modules path.
const path = require('node:path');
const fs = require('node:fs');
const assert = require('node:assert/strict');
const modules = process.env.QA_NODE_MODULES || path.join(process.env.TEMP, 'aman-qa/node_modules');
const { chromium } = require(path.join(modules, 'playwright'));
const { default: AxeBuilder } = require(path.join(modules, '@axe-core/playwright'));
const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4173/Aman-Construction/';
const out = __dirname;

(async () => {
  const browser = await chromium.launch({ channel: process.env.QA_BROWSER || 'msedge', headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  const errors = [];
  const report = { layouts: [], accessibility: [], interactions: [], resources: {}, errors };
  page.on('pageerror', error => errors.push(error.message));
  const network = [];
  page.on('request', request => network.push(request.url()));
  const routes = ['/', '/about', '/services', '/projects', '/pricing', '/contact'];
  try {
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: width < 760 ? 844 : 1000 });
      for (const route of routes) {
        await page.goto(base + '#' + route);
        await page.locator('h1').waitFor();
        await page.evaluate(() => document.fonts.ready);
        const measure = await page.evaluate(() => ({ viewport: innerWidth, document: document.documentElement.scrollWidth, headings: document.querySelectorAll('h1').length }));
        assert.ok(measure.document <= width, `Overflow at ${width}: ${route}, ${JSON.stringify(measure)}`);
        assert.equal(measure.headings, 1);
        report.layouts.push({ width, route, overflow: false });
        if (width === 390 || width === 1440) {
          const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
          report.accessibility.push({ width, route, violations: results.violations.map(item => ({ id: item.id, impact: item.impact, nodes: item.nodes.map(n => n.target) })) });
        }
      }
    }
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(base);
    const quoteBox = await page.locator('.hero-actions').getByRole('link', { name: 'Get a Quote' }).boundingBox();
    assert.ok(quoteBox.y + quoteBox.height < 844, 'Primary mobile CTA must be above fold');
    await page.getByRole('button', { name: 'Open navigation' }).click();
    assert.equal(await page.getByRole('button', { name: 'Close navigation' }).getAttribute('aria-expanded'), 'true');
    await page.keyboard.press('Escape');
    assert.equal(await page.getByRole('button', { name: 'Open navigation' }).getAttribute('aria-expanded'), 'false');
    assert.equal(await page.evaluate(() => document.activeElement?.getAttribute('aria-label')), 'Open navigation');
    await page.getByRole('button', { name: 'Open navigation' }).click();
    await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Projects' }).click();
    await page.waitForURL('**/#/projects');
    await page.getByRole('heading', { name: 'From a plan. To a place.', exact: true }).waitFor();
    assert.match(await page.locator('h1').innerText(), /From a plan/);
    assert.equal(await page.getByRole('button', { name: 'Open navigation' }).getAttribute('aria-expanded'), 'false');
    const project = page.locator('#anandvilla-residence');
    await project.getByRole('button', { name: 'Proposed elevation' }).click();
    assert.match(await project.locator('.gallery-image img').getAttribute('alt'), /Proposed architectural elevation render/);
    await project.getByRole('button', { name: 'Site photograph' }).click();
    assert.match(await project.locator('.gallery-image img').getAttribute('alt'), /Actual site photograph/);
    const firstPhoto = await project.locator('.gallery-image img').getAttribute('src');
    await project.getByRole('button', { name: 'Next image for Rajat Agarwal' }).click();
    assert.notEqual(await project.locator('.gallery-image img').getAttribute('src'), firstPhoto);
    await project.getByRole('button', { name: 'Previous image for Rajat Agarwal' }).click();
    assert.equal(await project.locator('.gallery-image img').getAttribute('src'), firstPhoto);
    assert.equal(await page.locator('.gallery-project').count(), 11);
    await page.getByRole('button', { name: 'Design-only projects', exact: true }).click();
    assert.equal(await page.locator('.gallery-project').count(), 4);
    assert.equal(await page.getByRole('button', { name: 'Site photograph', exact: true }).count(), 0);
    await page.getByRole('button', { name: 'With site photos', exact: true }).click();
    assert.equal(await page.locator('.gallery-project').count(), 7);
    await page.getByRole('button', { name: 'All projects', exact: true }).click();
    const names = await page.locator('.gallery-heading h2').allTextContents();
    assert.deepEqual(names, ['Rajat Agarwal', 'Pritesh Jain', 'Suresh Rochwani', 'Tarun Hinduja', 'Tanadiya ji', 'Harish Tolani', 'Dhananjay Gaikwad', 'Gopal Raghuvanshi ji', 'Jaswani ji', 'Ankit Saxena ji', 'Neeraj Vijayvergy']);
    await project.getByRole('link', { name: 'Discuss a similar project' }).click();
    assert.match(await page.locator('#message').inputValue(), /Anandvilla Residence/);
    report.interactions.push('Mobile CTA visible, menu open/close/Escape/focus, route selection, gallery type/next/previous, 11 client names, 7 site-photo and 4 design-only project filters, project enquiry prefill');

    await page.goto(base + '#/pricing');
    await page.getByRole('link', { name: 'Enquire about Style', exact: true }).click();
    await page.waitForURL('**/#/contact?package=Style');
    assert.equal(await page.locator('#package').inputValue(), 'Style');
    let requests = 0;
    let mode = 'reject';
    let submitted = '';
    await page.route('https://formspree.io/f/xovazlrl', async route => {
      requests += 1;
      submitted = route.request().postData() || '';
      if (mode === 'network') return route.abort('failed');
      await new Promise(resolve => setTimeout(resolve, 250));
      await route.fulfill({ status: mode === 'reject' ? 422 : 200, contentType: 'application/json', body: mode === 'success' ? '{"ok":true}' : '{"ok":false,"errors":[{"message":"Test failure"}]}' });
    });
    await page.getByRole('button', { name: 'Send Enquiry', exact: true }).click();
    assert.equal(requests, 0, 'Invalid form must not send requests');
    assert.equal(await page.evaluate(() => document.activeElement.id), 'name');
    await page.locator('#name').fill('QA Verification');
    await page.locator('#email').fill('invalid');
    await page.locator('#phone').fill('abc');
    await page.locator('#message').fill('A test project enquiry used only in local mocked browser QA.');
    await page.getByRole('button', { name: 'Send Enquiry', exact: true }).click();
    assert.equal(requests, 0);
    assert.equal(await page.locator('#email').getAttribute('aria-invalid'), 'true');
    assert.equal(await page.locator('#phone').getAttribute('aria-invalid'), 'true');
    await page.locator('#email').fill('qa@example.invalid');
    await page.locator('#phone').fill('+91 99999 99999');
    await page.getByRole('button', { name: 'Send Enquiry', exact: true }).click();
    assert.equal(await page.getByRole('button', { name: 'Sending your enquiry…' }).isDisabled(), true);
    await page.getByRole('alert').waitFor();
    assert.equal(await page.locator('#name').inputValue(), 'QA Verification');
    assert.equal(await page.locator('.form-success').count(), 0);
    assert.match(submitted, /name="package"\r\n\r\nStyle/);
    mode = 'network';
    await page.getByRole('button', { name: 'Send Enquiry', exact: true }).click();
    await page.getByRole('alert').waitFor();
    assert.equal(await page.locator('#email').inputValue(), 'qa@example.invalid');
    mode = 'unconfirmed';
    await page.getByRole('button', { name: 'Send Enquiry', exact: true }).click();
    await page.getByRole('alert').waitFor();
    assert.equal(await page.locator('.form-success').count(), 0);
    mode = 'success';
    await page.getByRole('button', { name: 'Send Enquiry', exact: true }).click();
    await page.getByRole('heading', { name: 'Thank you for reaching out.' }).waitFor();
    assert.equal(requests, 4);
    assert.equal(await page.evaluate(() => document.activeElement?.className), 'form-success');
    await page.getByRole('button', { name: 'Send another enquiry' }).click();
    assert.equal(await page.locator('#email').inputValue(), '');
    assert.equal(await page.locator('#package').inputValue(), 'Style');
    report.interactions.push('Package prefill, required/email/phone validation, pending submit, HTTP rejection, network failure, unconfirmed response, confirmed success, retry/reset');

    await page.goto(base + '#/about');
    assert.equal(await page.locator('video').count(), 0);
    assert.equal(network.some(url => url.includes('.mp4')), false, 'Video must not download until requested');
    await page.getByRole('button', { name: 'Watch our construction guide' }).click();
    await page.locator('video').waitFor();
    assert.equal(await page.locator('video').getAttribute('preload'), 'metadata');
    await page.waitForFunction(() => document.querySelector('video').readyState >= 1);
    report.interactions.push('Video loads on demand and media metadata is playable');

    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(base);
    assert.equal(await page.locator('.hero-copy').evaluate(element => getComputedStyle(element).animationName), 'none');
    await page.keyboard.press('Tab');
    // Use explicit focus to verify the skip link without depending on prior browser focus.
    await page.getByRole('link', { name: 'Skip to content' }).focus();
    await page.keyboard.press('Enter');
    assert.equal(await page.evaluate(() => document.activeElement.id), 'main-content');
    const links = await page.locator('a').evaluateAll(elements => elements.map(element => element.getAttribute('href')));
    assert.ok(links.includes('tel:+919329370146'));
    assert.ok(links.includes('mailto:amanconstruction146@gmail.com'));
    assert.ok(links.includes('https://wa.me/919329370146'));
    assert.ok(links.filter(href => href.startsWith('#/')).every(href => /^#\/(?:about|services|projects|pricing|contact)?(?:[?#].*)?$/.test(href)));
    report.interactions.push('Reduced motion, keyboard skip link, verified phone/email/WhatsApp and internal links');

    for (const width of [1440, 390]) {
      const label = width === 1440 ? 'desktop' : 'mobile';
      await page.setViewportSize({ width, height: width === 1440 ? 1000 : 844 });
      await page.goto(base);
      await page.evaluate(() => document.fonts.ready);
      for (let y = 0; y < await page.evaluate(() => document.documentElement.scrollHeight); y += 700) {
        await page.evaluate(y => scrollTo(0, y), y);
        await page.waitForTimeout(50);
      }
      await page.evaluate(() => scrollTo(0, 0));
      await page.screenshot({ path: path.join(out, 'after-' + label + '.png'), fullPage: true });
      await page.screenshot({ path: path.join(out, 'after-' + label + '-hero.png') });
      await page.goto(base + '#/contact');
      await page.screenshot({ path: path.join(out, 'contact-' + label + '.png'), fullPage: true });
      await page.goto(base + '#/projects');
      await page.screenshot({ path: path.join(out, 'projects-' + label + '.png'), fullPage: true });
    }
    report.resources.externalImageRequests = network.filter(url => /unsplash|images\./.test(url));
    report.resources.videoDeferredUntilInteraction = true;
    assert.equal(errors.length, 0);
    fs.writeFileSync(path.join(out, 'verification.json'), JSON.stringify(report, null, 2));
    const violations = report.accessibility.flatMap(result => result.violations);
    console.log(JSON.stringify({ layoutChecks: report.layouts.length, accessibilityChecks: report.accessibility.length, violations, interactions: report.interactions, errors }, null, 2));
    assert.equal(violations.length, 0, 'Accessibility checks should pass');
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
