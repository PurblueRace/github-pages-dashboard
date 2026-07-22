import type { Metadata } from "next";
import { PageFrame } from "../components/site-chrome";
import { experience } from "../site-data";

export const metadata: Metadata = {
  title: "Experience | YU HWAPYEONG",
  description: "유화평의 재무회계 실무와 업무 개선 경험입니다.",
};

export default function ExperiencePage() {
  return (
    <PageFrame active="experience">
      <section className="content-page shell">
        <header className="page-heading">
          <span>EXPERIENCE</span>
          <h1>경력과 경험</h1>
          <p>재무회계 실무와 업무 개선 경험입니다.</p>
        </header>

        <div className="lower-grid experience-layout">
          <div className="experience-panel">
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
        </div>
      </section>
    </PageFrame>
  );
}
