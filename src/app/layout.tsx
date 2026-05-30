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

export const metadata: Metadata = {
  metadataBase: new URL("https://your-project-name.vercel.app"),

  title: "Anushka Mukherjee | Portfolio",

  description:
    "Portfolio of Anushka Mukherjee, aspiring Full Stack Engineer focused on AI systems, scalable applications, and intelligent software.",

  openGraph: {
    title: "Anushka Mukherjee | Portfolio",

    description:
      "Portfolio showcasing AI projects, full-stack development, and software engineering work.",

    images: ["/images/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-[200px]" />
          <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-violet-500/5 blur-[200px]" />
        </div>
      </body>
    </html>
  );
}
