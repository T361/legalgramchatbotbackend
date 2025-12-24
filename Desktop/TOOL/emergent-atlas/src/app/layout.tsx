import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FAST Roadmap | FAST-NU BS Software Engineering Study Guide",
  description:
    "Rigorous learning pathways for BS Software Engineering students at FAST-NU Islamabad. Complete roadmaps, curated YouTube channels, group study methods, and exam strategies.",
  keywords: [
    "FAST-NU",
    "Software Engineering",
    "Academic Roadmap",
    "Programming Fundamentals",
    "Data Structures",
    "OOP",
    "C++",
    "FAST Islamabad",
    "Learning Pathways",
    "Study Guide",
    "YouTube Resources",
    "Apna College",
    "CodeWithHarry",
    "Abdul Bari",
  ],
  authors: [{ name: "Taimoor Shaukat" }],
  creator: "FAST Roadmap",
  openGraph: {
    title: "FAST Roadmap | FAST-NU SE Study Guide",
    description: "Complete learning pathways for FAST-NU Software Engineering students",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
