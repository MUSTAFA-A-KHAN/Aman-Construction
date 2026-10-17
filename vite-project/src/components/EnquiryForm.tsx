import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { business } from "../data";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

export default function EnquiryForm({
  selectedPackage = "",
  project = "",
}: {
  selectedPackage?: string;
  project?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const request = useRef<AbortController | null>(null);
  const submitting = useRef(false);
  const success = useRef<HTMLDivElement>(null);
  useEffect(() => () => request.current?.abort(), []);
  useEffect(() => {
    if (status === "success") success.current?.focus();
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) || "").trim();
    const nextErrors: Errors = {};
    if (value("name").length < 2)
      nextErrors.name = "Please enter your full name (at least 2 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value("email")))
      nextErrors.email = "Please enter a valid email address so we can reply.";
    if (
      value("phone") &&
      (!/^[+\d\s().-]+$/.test(value("phone")) ||
        value("phone").replace(/\D/g, "").length < 7 ||
        value("phone").replace(/\D/g, "").length > 15)
    )
      nextErrors.phone =
        "Enter a phone number with 7–15 digits, including your country code if needed.";
    if (value("message").length < 10)
      nextErrors.message =
        "Please share a little more about your project (at least 10 characters).";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      (
        form.elements.namedItem(Object.keys(nextErrors)[0]) as HTMLElement
      )?.focus();
      return;
    }
    for (const key of ["name", "email", "phone", "message", "location"])
      data.set(key, value(key));
    submitting.current = true;
    setStatus("submitting");
    const controller = new AbortController();
    request.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(business.formEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("Submission failed");
      const result: { ok?: boolean; errors?: unknown[] } =
        await response.json();
      if (result.ok === false || result.errors?.length)
        throw new Error("Submission was not confirmed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      window.clearTimeout(timeout);
      submitting.current = false;
      request.current = null;
    }
  }

  if (status === "success")
    return (
      <div className="form-success" ref={success} tabIndex={-1} role="status">
        <CheckCircle2 size={44} strokeWidth={1.4} aria-hidden="true" />
        <p className="eyebrow">MESSAGE RECEIVED</p>
        <h2>Thank you for reaching out.</h2>
        <p>
          Your enquiry has been sent to AMAN Construction. We’ll be in touch
          using the details you shared.
        </p>
        <button
          className="button button-navy"
          type="button"
          onClick={() => setStatus("idle")}
        >
          Send another enquiry <ArrowUpRight size={18} aria-hidden="true" />
        </button>
      </div>
    );

  return (
    <form
      action={business.formEndpoint}
      method="POST"
      onSubmit={handleSubmit}
      noValidate
      className="enquiry-form"
      aria-busy={status === "submitting"}
    >
      <div className="form-heading">
        <span className="eyebrow">TELL US WHAT YOU HAVE IN MIND</span>
        <h2>Your project starts here.</h2>
        <p>
          Fields marked <span aria-hidden="true">*</span> are required.
        </p>
      </div>
      <div aria-live="polite">
        {status === "error" && (
          <div className="form-error" role="alert">
            We couldn’t confirm your enquiry was sent. Your details are still
            here. Please try again, or{" "}
            <a href={business.phoneHref}>call {business.phone}</a>.
          </div>
        )}
      </div>
      <fieldset disabled={status === "submitting"}>
        <legend className="sr-only">Project enquiry details</legend>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="name">
              Full name <span>*</span>
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              maxLength={100}
              placeholder="Your full name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p className="field-error" id="name-error">
                {errors.name}
              </p>
            )}
          </div>
          <div className="field">
            <label htmlFor="phone">
              Phone number <small>(optional)</small>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              maxLength={25}
              placeholder="+91"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <p className="field-error" id="phone-error">
                {errors.phone}
              </p>
            )}
          </div>
          <div className="field full-width">
            <label htmlFor="email">
              Email address <span>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p className="field-error" id="email-error">
                {errors.email}
              </p>
            )}
          </div>
          <div className="field">
            <label htmlFor="location">
              Project location <small>(optional)</small>
            </label>
            <input
              id="location"
              name="location"
              maxLength={150}
              placeholder="Area or city"
            />
          </div>
          <div className="field">
            <label htmlFor="package">Preferred package</label>
            <select id="package" name="package" defaultValue={selectedPackage}>
              <option value="">Help me choose</option>
              <option>Premium</option>
              <option>Style</option>
              <option>Luxury</option>
            </select>
          </div>
          <div className="field full-width">
            <label htmlFor="message">
              Tell us about your project <span>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              maxLength={5000}
              defaultValue={
                project
                  ? `I’d like to discuss a project similar to ${project}. `
                  : ""
              }
              placeholder="Your plans, plot size, preferred timeline, or anything you’d like us to know."
              aria-invalid={!!errors.message}
              aria-describedby={
                errors.message ? "message-error" : "message-hint"
              }
            />
            {errors.message ? (
              <p className="field-error" id="message-error">
                {errors.message}
              </p>
            ) : (
              <p className="field-hint" id="message-hint">
                A few details will help us understand what you need.
              </p>
            )}
          </div>
        </div>
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="website">Leave this field empty</label>
          <input id="website" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </div>
        <button
          className="button button-gold form-submit"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <>
              <LoaderCircle className="spinner" size={19} aria-hidden="true" />{" "}
              Sending your enquiry…
            </>
          ) : (
            <>
              Send Enquiry <ArrowUpRight size={20} aria-hidden="true" />
            </>
          )}
        </button>
      </fieldset>
      <p className="form-note">
        Your details will be used to respond to your project enquiry.
      </p>
    </form>
  );
}
