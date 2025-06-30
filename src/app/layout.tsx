import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";

import ThemeProvider from "@/context/Theme";
import { Analytics } from "@vercel/analytics/next";

const OpenSans = localFont({
  variable: "--font-open-sans",
  src: "./fonts/OpenSansVF.ttf",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Manab Das",
  description:
    "Manab Das is a Fullstack Webdeveloper who loves to build things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with responsive design. I am a self-taught developer who is passionate about building software that improves the lives of those around me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${OpenSans.variable}  dark:bg-zinc-900`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
