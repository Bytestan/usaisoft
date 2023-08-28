import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import NavBar from "@/app/components/NavBar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "USAi Soft",
  description: "Develop by @bytestan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
