import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const montserrat = Montserrat({
  variable: "--montserrat",
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
