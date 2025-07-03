import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const HK_Nova = localFont({
  src: "./fonts/HKNova-Medium.ttf",
  variable: "--HK-Nova",
});

export const metadata: Metadata = {
  title: "Chronicles: Blockchain Oral History Preservation Network",
  description:
    "To preserve, validate, and share Africa's rich oral heritage using blockchain, AI, and community engagement.",
  authors: [{ name: "Chronicles Dev Team", url: "link goes here." }],
  applicationName: "Chronicles",
  openGraph: {
    title: "Chronicles: Blockchain Oral History Preservation Network",
    description:
      "To preserve, validate, and share Africa's rich oral heritage using blockchain, AI, and community engagement.",
    images: ["link to image goes here."],
    siteName: "Chronicles",
    url: "link to live website goes here",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chronicles: Blockchain Oral History Preservation Network",
    description:
      "To preserve, validate, and share Africa's rich oral heritage using blockchain, AI, and community engagement.",
    creator: "@Pelumi82",
    images: ["link to image goes here."],
    site: "@official_twitter_handle_goes_here.",
  },
  icons: { shortcut: ["/favicon.ico"] },
  keywords: "keywords, goes, here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`p-0 m-0 ${HK_Nova.variable}`}>
      {children}
    </html>
  );
}
