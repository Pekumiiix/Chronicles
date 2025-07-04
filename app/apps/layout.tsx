import HeaderSection from "./_sections/header";

export default function AppsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className={`relative flex flex-col items-center gap-10 bg-white`}>
      <HeaderSection />

      {children}
    </body>
  );
}
