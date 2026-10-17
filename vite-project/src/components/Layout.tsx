import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const titles: Record<string, string> = {
  "/": "AMAN Construction | Thoughtfully built. Built around you.",
  "/about": "About us | AMAN Construction",
  "/services": "Construction services | AMAN Construction",
  "/projects": "Our projects in Dewas | AMAN Construction",
  "/pricing": "Construction packages | AMAN Construction",
  "/contact": "Get a quote | AMAN Construction",
};
export default function Layout() {
  const location = useLocation();
  const main = useRef<HTMLElement>(null);
  const firstVisit = useRef(true);
  useEffect(() => {
    document.title = titles[location.pathname] || "AMAN Construction";
    if (location.hash) {
      const section = document.getElementById(location.hash.slice(1));
      section?.scrollIntoView({ behavior: "instant", block: "start" });
      section?.focus({ preventScroll: true });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
      if (!firstVisit.current) main.current?.focus({ preventScroll: true });
    }
    firstVisit.current = false;
  }, [location.pathname, location.hash]);
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07 },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location.pathname]);
  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          main.current?.focus();
        }}
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" ref={main} tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
