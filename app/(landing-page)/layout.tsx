import Footer from "./sections/footer";
import localFont from "next/font/local";

const HK_Nova = localFont({
  src: "../fonts/HKNova-Medium.ttf",
  variable: "--HK-Nova",
});

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={`${HK_Nova.variable} flex flex-col gap-[105px]`}>
      {children}
      <Footer />
    </body>
  );
}
