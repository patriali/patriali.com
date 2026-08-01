// ─────────────────────────────────────────────────────────────
// EDIT ME: your contact info and links live here.
// ─────────────────────────────────────────────────────────────
const PROFILE = {
  name: "Danilo Patriali",
  tagline: "patriali.com",
  email: "contact@patriali.com",
  avatar: "/logos/apollo11.png",
};

const LINKS: {
  label: string;
  description: string;
  href: string;
  icon: string;
  mono?: boolean; // black logo → inverted to white in dark mode
  comingSoon?: boolean;
}[] = [
  {
    label: "Domain Portfolio",
    description: "Domains I own",
    href: "https://domains.patriali.com",
    icon: "/logos/atom.png",
  },
  {
    label: "GitHub",
    description: "Code & projects",
    href: "https://github.patriali.com",
    icon: "/logos/github.svg",
    mono: true,
  },
  {
    label: "X",
    description: "Find me on X",
    href: "https://x.patriali.com",
    icon: "/logos/x.png",
    mono: true,
  },
  {
    label: "Arch Dotfiles",
    description: "My Arch Linux setup",
    href: "#",
    icon: "/logos/arch.png",
    mono: true,
    comingSoon: true,
  },
];
// ─────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="page">
      <section className="card">
        <header className="intro">
          <img
            className="avatar"
            src={PROFILE.avatar}
            alt=""
            width={56}
            height={56}
            aria-hidden
          />
          <div className="intro-text">
            <h1>{PROFILE.name}</h1>
            <p className="tagline">{PROFILE.tagline}</p>
          </div>
        </header>

        <nav className="links">
          {LINKS.map((link) =>
            link.comingSoon ? (
              <span key={link.label} className="link is-disabled">
                <span className="link-text">
                  <span className="link-label">
                    {link.label}
                    <span className="badge">Coming soon</span>
                  </span>
                  <span className="link-desc">{link.description}</span>
                </span>
                <img
                  className={`link-icon${link.mono ? " link-icon--mono" : ""}`}
                  src={link.icon}
                  alt=""
                  aria-hidden
                />
              </span>
            ) : (
              <a
                key={link.label}
                className="link"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="link-text">
                  <span className="link-label">
                    {link.label}
                    <span className="arrow" aria-hidden>
                      ↗
                    </span>
                  </span>
                  <span className="link-desc">{link.description}</span>
                </span>
                <img
                  className={`link-icon${link.mono ? " link-icon--mono" : ""}`}
                  src={link.icon}
                  alt=""
                  aria-hidden
                />
              </a>
            )
          )}
        </nav>

        <footer className="contact">
          <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
        </footer>
      </section>
    </main>
  );
}
