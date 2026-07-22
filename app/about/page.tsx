import type { Metadata } from "next";
import { PageFrame } from "../components/site-chrome";
import { skills } from "../site-data";

export const metadata: Metadata = {
  title: "About | YU HWAPYEONG",
  description: "유화평의 업무 분야와 기술을 소개합니다.",
};

export default function AboutPage() {
  return (
    <PageFrame active="about">
      <section className="content-page shell">
        <header className="page-heading">
          <span>ABOUT</span>
          <h1>업무와 기술</h1>
          <p>회계·세무 실무와 데이터 자동화를 함께 다룹니다.</p>
        </header>

        <div className="about-panel">
          <div className="about-copy">
            <span className="section-label">PROFILE</span>
            <h2>Accounting &amp; Tax × Data Automation</h2>
            <p>
              결산, 자산·리스 회계, XBRL 공시, 세무 신고 업무를 담당하고 있습니다.
              실무 과정에서 Python, SQL, AI를 활용해 반복 업무를 줄이는 도구를 만듭니다.
            </p>
          </div>

          <div className="skills about-skills">
            <div className="section-heading">
              <span>TECH &amp; DOMAIN STACK</span>
              <p>회계 업무와 데이터 자동화에 사용하는 기술입니다.</p>
            </div>
            <div className="skill-list">
              {skills.map(([icon, label]) => (
                <span className="skill" key={label}><b>{icon}</b>{label}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
