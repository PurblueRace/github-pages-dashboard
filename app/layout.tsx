import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "YU HWAPYEONG | Accounting × Technology",
    description: "회계·세무 실무와 데이터 자동화를 연결하는 유화평의 프로젝트 포트폴리오",
    icons: { icon: "/favicon.svg" },
    openGraph: {
      title: "YU HWAPYEONG | Accounting × Technology",
      description: "Projects · Automation · Data",
      type: "website",
      url: origin,
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "YU HWAPYEONG portfolio" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "YU HWAPYEONG | Accounting × Technology",
      description: "Projects · Automation · Data",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
