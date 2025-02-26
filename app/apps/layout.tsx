import Background from "../../components/custom/background";
import HeaderSection from "./_sections/header";

export default function AppsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className={`relative flex flex-col items-center gap-10`}>
      <Background />

      <HeaderSection />

      <main className="w-full flex flex-col items-center gap-10 md:gap-[105px]">
        {children}
      </main>
    </body>
  );
}
