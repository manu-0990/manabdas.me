import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import ThemeProvider from "@/context/Theme";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/navbar";

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
      <body className={`${OpenSans.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen bg-white/60 dark:bg-zinc-900">
            <Navbar />
            <main className="flex-grow mx-auto my-0 flex w-full max-w-4xl items-center justify-between px-8">
              {children}
            </main>
          </div>

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}