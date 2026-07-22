import Link from "next/link";
import type { ReactNode } from "react";
import { BASE_PATH } from "../site-data";

type PageName = "home" | "about" | "projects" | "experience";

const navItems: Array<{ key: PageName; label: string; href: string }> = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About", href: "/about" },
  { key: "projects", label: "Projects", href: "/projects" },
  { key: "experience", label: "Experience", href: "/experience" },
];

export function PageFrame({ active, children }: { active: PageName; children: ReactNode }) {
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="nav shell" aria-label="주요 메뉴">
        <Link className="brand" href="/" aria-label="홈으로">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>YU HWAPYEONG</span>
        </Link>
        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              className={active === item.key ? "active" : undefined}
              href={item.href}
              aria-current={active === item.key ? "page" : undefined}
              key={item.key}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <a className="resume-link" href={`${BASE_PATH}/resume_Yu_Hwapyeong_English.pdf`} download>
          Resume <span aria-hidden="true">↓</span>
        </a>
      </nav>

      {children}

      <footer className="shell">
        <span>© 2026 YU HWAPYEONG</span>
        <span>Accounting · Automation · Projects</span>
      </footer>
    </main>
  );
}
