import type { Metadata } from "next";
import { PageFrame } from "../components/site-chrome";
import { projects } from "../site-data";

export const metadata: Metadata = {
  title: "Projects | YU HWAPYEONG",
  description: "유화평이 만든 회계 및 데이터 프로젝트입니다.",
};

export default function ProjectsPage() {
  return (
    <PageFrame active="projects">
      <section className="content-page projects-page shell">
        <header className="page-heading row-heading">
          <div>
            <span>PROJECTS</span>
            <h1>프로젝트</h1>
            <p>직접 만든 프로젝트를 모았습니다.</p>
          </div>
          <a href="https://github.com/PurblueRace?tab=repositories" target="_blank" rel="noreferrer">
            GitHub 저장소 전체 보기 →
          </a>
        </header>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card featured" key={project.title}>
              <div className={`project-preview ${project.tone}`}>
                {"image" in project ? (
                  <img src={project.image} alt="TalkToData 대시보드 미리보기" />
                ) : (
                  <iframe
                    src={project.preview}
                    title={`${project.title} 미리보기`}
                    loading={index === 0 ? "eager" : "lazy"}
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
    </PageFrame>
  );
}
