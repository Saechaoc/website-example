import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Custom Software Solutions | Software Consulting Agency",
  description: "Expert software consulting specializing in AI/ML, custom applications, and enterprise solutions.",
  keywords: ["software consulting", "custom development", "AI solutions", "RAG", "ChatGPT integration"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourcompany.com",
    title: "Custom Software Solutions | Software Consulting Agency",
    description: "Expert software consulting specializing in AI/ML, custom applications, and enterprise solutions.",
    siteName: "Software Consulting Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Solutions | Software Consulting Agency",
    description: "Expert software consulting specializing in AI/ML, custom applications, and enterprise solutions.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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