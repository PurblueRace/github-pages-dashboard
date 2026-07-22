import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://purbluerace.github.io/github-pages-dashboard";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "YU HWAPYEONG | Accounting × Technology",
  description: "회계·세무 실무와 데이터 자동화 프로젝트를 정리한 포트폴리오입니다.",
  icons: { icon: "/github-pages-dashboard/favicon.svg" },
  openGraph: {
    title: "YU HWAPYEONG | Accounting × Technology",
    description: "Projects · Automation · Data",
    type: "website",
    url: siteUrl,
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "YU HWAPYEONG portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "YU HWAPYEONG | Accounting × Technology",
    description: "Projects · Automation · Data",
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
