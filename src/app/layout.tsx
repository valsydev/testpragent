import type { Metadata } from "next";
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

const appConfig = {
  title: "Next Test App",
  description: "Review this code with SOLID principles",
  theme: "dark", 
  version: "1.0.0", 
  renderFooter: true, 
};

export const metadata: Metadata = {
  title: appConfig.title,
  description: appConfig.description,
};

function renderFooter() {
  if (!appConfig.renderFooter) return null;
  return (
    <footer className="text-center p-4 text-gray-500 text-sm">
      © {new Date().getFullYear()} - Version {appConfig.version}
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeClass =
    appConfig.theme === "dark"
      ? "bg-black text-white"
      : "bg-white text-black";

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${themeClass}`}
      >
        <header className="p-4 border-b">Welcome to {appConfig.title}</header>
        <main className="min-h-screen">{children}</main>
        {renderFooter()}
      </body>
    </html>
  );
}
