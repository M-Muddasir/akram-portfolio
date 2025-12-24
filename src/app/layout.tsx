import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Akram | Full Stack Engineer",
  description:
    "Full Stack Engineer with 3 years of experience building and maintaining full-stack applications using the MERN stack. Skilled in designing RESTful APIs, creating responsive frontends, and deploying scalable applications.",
  keywords: [
    "Muhammad Akram",
    "Full Stack Engineer",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Software Engineer",
    "Lahore",
    "Pakistan",
  ],
  authors: [{ name: "Muhammad Akram" }],
  openGraph: {
    title: "Muhammad Akram | Full Stack Engineer",
    description:
      "Full Stack Engineer specializing in MERN stack development with 3 years of experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased font-sans`}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
