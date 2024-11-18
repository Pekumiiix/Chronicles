import Footer from "./sections/footer";

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="flex flex-col gap-[105px]">
      {children}
      <Footer />
    </body>
  );
}
