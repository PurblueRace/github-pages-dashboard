import type { Metadata } from "next";

const BASE_PATH = "/github-pages-dashboard";

export const metadata: Metadata = {
  title: "YU HWAPYEONG | Accounting × Technology",
  description:
    "회계·세무 실무와 데이터 자동화 프로젝트를 정리한 포트폴리오입니다.",
};

const skills = [
  ["PY", "Python"],
  ["SQL", "SQL"],
  ["AI", "Artificial Intelligence"],
  ["ST", "Streamlit"],
  ["XL", "Excel · VBA"],
  ["XR", "XBRL"],
  ["SAP", "SAP"],
  ["ERP", "Douzone ERP"],
];

const projects = [
  {
    title: "TalkToData",
    kicker: "Featured · AI Accounting",
    description:
      "자연어 질문을 SQL로 변환해 회계 데이터를 표, 요약 보고서, 차트로 분석하는 AI 회계 감사 도구입니다.",
    href: "https://talktodata-app-sglytunsuydvcxeltxck6z.streamlit.app/",
    preview: "https://talktodata-app-sglytunsuydvcxeltxck6z.streamlit.app/",
    image: `${BASE_PATH}/talktodata-preview.png`,
    tags: ["Python", "SQL", "Streamlit", "AI"],
    tone: "violet",
  },
  {
    title: "Value Scanner",
    kicker: "Featured · Finance",
    description:
      "기업가치를 단계별로 분석하고 DCF 가정과 결과를 시각적으로 탐색하는 밸류에이션 도구입니다.",
    href: "https://purbluerace.github.io/value-scanner/",
    preview: "https://purbluerace.github.io/value-scanner/",
    tags: ["JavaScript", "DCF", "Dashboard"],
    tone: "blue",
  },
];

const experience = [
  {
    period: "2023. 11 — 현재",
    role: "Manager · Financial Accounting",
    company: "JOYCITY Corporation",
    detail:
      "월·분기·연 결산, 자산·리스 회계, XBRL 공시, 세무 신고 및 내부회계관리제도 업무를 수행합니다.",
  },
  {
    period: "주요 성과",
    role: "Tax Risk & Recovery",
    company: "Accounting · Tax",
    detail:
      "3개년 신고 비교로 1.8억 원 환급, 농어촌특별세 4천만 원을 0원으로 조정하고 신고 오류를 발견해 약 3천만 원을 절감했습니다.",
  },
  {
    period: "시스템 전환",
    role: "ERP Migration & Automation",
    company: "SAP → Douzone ERP",
    detail:
      "마스터 데이터 이관과 정합성 검증, 오류 분석을 담당하고 반복 회계·세무 업무를 자동화했습니다.",
  },
];

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="nav shell" aria-label="주요 메뉴">
        <a className="brand" href="#home" aria-label="첫 화면으로">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>YU HWAPYEONG</span>
        </a>
        <div className="nav-links">
          <a className="active" href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </div>
        <a className="resume-link" href={`${BASE_PATH}/resume_Yu_Hwapyeong_English.pdf`} download>
          Resume <span aria-hidden="true">↓</span>
        </a>
      </nav>

      <section className="hero shell" id="home">
        <div className="hero-copy">
          <span className="eyebrow">👋 HELLO, I&apos;M</span>
          <h1>
            YU <span>HWAPYEONG</span>
          </h1>
          <p className="role">Accounting &amp; Tax × Data Automation</p>
          <p className="intro">
            회계·세무 업무를 담당하며 Python, SQL, AI를 활용한 자동화 도구를 만들고 있습니다.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#projects">프로젝트 보기 <span>→</span></a>
            <a className="secondary-button" href="mailto:dbghkvud223@naver.com">연락하기 <span>✉</span></a>
          </div>
          <div className="social-row">
            <a href="https://github.com/PurblueRace" target="_blank" rel="noreferrer">● GitHub</a>
            <i />
            <a href="mailto:dbghkvud223@naver.com">▣ dbghkvud223@naver.com</a>
          </div>
        </div>

        <div className="portrait-wrap" aria-label="유화평 프로필 사진">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="portrait-glow" />
          <img src={`${BASE_PATH}/profile.jpg`} alt="유화평 프로필" />
          <span className="status-dot" />
          <div className="floating-code">AI + Accounting</div>
        </div>
      </section>

      <section className="skills shell" id="about">
        <div className="section-heading">
          <span>TECH &amp; DOMAIN STACK</span>
          <p>회계 업무와 데이터 자동화에 사용하는 기술입니다.</p>
        </div>
        <div className="skill-list">
          {skills.map(([icon, label]) => (
            <span className="skill" key={label}><b>{icon}</b>{label}</span>
          ))}
        </div>
      </section>

      <section className="projects shell" id="projects">
        <div className="section-heading row-heading">
          <div>
            <span>PROJECT DASHBOARD</span>
            <p>직접 만든 프로젝트를 모았습니다.</p>
          </div>
          <a href="https://github.com/PurblueRace?tab=repositories" target="_blank" rel="noreferrer">
            GitHub 저장소 전체 보기 →
          </a>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${index < 3 ? "featured" : ""}`} key={project.title}>
              <div className={`project-preview ${project.tone}`}>
                {"image" in project ? (
                  <img src={project.image} alt="TalkToData 대시보드 미리보기" />
                ) : (
                  <iframe
                    src={project.preview}
                    title={`${project.title} 미리보기`}
                    loading={index < 3 ? "eager" : "lazy"}
                    tabIndex={-1}
                    aria-hidden="true"
                  />
                )}
                <div className="preview-shade" />
                <span className="live-badge"><i /> LIVE</span>
              </div>
              <div className="project-content">
                <span className="project-kicker">{project.kicker}</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a className="card-link" href={project.href} target="_blank" rel="noreferrer">
                  사이트 열기 <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="lower-grid shell" id="experience">
        <div className="experience-panel">
          <div className="section-heading">
            <span>EXPERIENCE</span>
            <p>재무회계 실무와 업무 개선 경험입니다.</p>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article key={item.role}>
                <div className="timeline-marker" />
                <span className="period">{item.period}</span>
                <h3>{item.role}</h3>
                <strong>{item.company}</strong>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="connect-card">
          <span className="section-label">LET&apos;S CONNECT</span>
          <h2>연락처</h2>
          <p>업무와 프로젝트에 관해 편하게 연락해 주세요.</p>
          <div className="contact-links">
            <a href="mailto:dbghkvud223@naver.com"><span>✉</span> dbghkvud223@naver.com</a>
            <a href="https://github.com/PurblueRace" target="_blank" rel="noreferrer"><span>●</span> github.com/PurblueRace</a>
            <a href="https://talktodata-app-sglytunsuydvcxeltxck6z.streamlit.app/" target="_blank" rel="noreferrer"><span>↗</span> TalkToData live app</a>
          </div>
          <div className="paper-plane" aria-hidden="true">➤</div>
          <div className="flight-path" aria-hidden="true">··········</div>
        </aside>
      </section>

      <footer className="shell">
        <span>© 2026 YU HWAPYEONG</span>
        <span>Accounting · Automation · Projects</span>
      </footer>
    </main>
  );
}
