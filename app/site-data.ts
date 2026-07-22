export const BASE_PATH = "/github-pages-dashboard";

export const skills = [
  ["PY", "Python"],
  ["SQL", "SQL"],
  ["AI", "Artificial Intelligence"],
  ["ST", "Streamlit"],
  ["XL", "Excel · VBA"],
  ["XR", "XBRL"],
  ["SAP", "SAP"],
  ["ERP", "Douzone ERP"],
];

export const projects = [
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

export const experience = [
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
