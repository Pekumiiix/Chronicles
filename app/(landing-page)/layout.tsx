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
      className={`${HK_Nova.variable} flex flex-col items-center gap-10 md:gap-[105px] pb-8`}
    >
      <Header />

      <main className="w-full flex flex-col items-center gap-10 md:gap-[105px]">
        {children}
      </main>

      <Footer />
    </body>
  );
}
