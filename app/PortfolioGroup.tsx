"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

type SubLink = {
  label: string;
  description: string;
  href: string;
  icon: string;
};

export default function PortfolioGroup({
  label,
  description,
  subLinks,
}: {
  label: string;
  description: string;
  subLinks: SubLink[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`group${open ? " is-open" : ""}`}>
      <button
        type="button"
        className="link group-trigger"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="link-text">
          <span className="link-label">{label}</span>
          <span className="link-desc">{description}</span>
        </span>
        <svg
          className="chevron"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="group-panel">
        <div className="group-panel-inner">
          {subLinks.map((link, i) => (
            <a
              key={link.label}
              className="link sub-link"
              href={link.href}
              target="_blank"
              rel="noreferrer"
              style={{ "--i": i } as CSSProperties}
              tabIndex={open ? undefined : -1}
            >
              <span className="link-text">
                <span className="link-label">
                  {link.label}
                  <span className="arrow" aria-hidden>
                    ↗
                  </span>
                </span>
              </span>
              <img className="link-icon" src={link.icon} alt="" aria-hidden />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
