import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "./components/site-chrome";
import { BASE_PATH } from "./site-data";

export const metadata: Metadata = {
  title: "Home | YU HWAPYEONG",
  description: "유화평의 회계·세무 및 데이터 자동화 포트폴리오입니다.",
};

export default function Home() {
  return (
    <PageFrame active="home">
      <section className="hero page-home shell">
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
            <Link className="primary-button" href="/projects">프로젝트 보기 <span>→</span></Link>
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
    </PageFrame>
  );
}
