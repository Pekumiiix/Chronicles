import Footer from "./sections/footer";
import localFont from "next/font/local";
import Header from "./sections/header";

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
    <body
      className={`${HK_Nova.variable} flex flex-col items-center gap-[105px]`}
    >
      <Header />

      {children}

      <Footer />
    </body>
  );
}
