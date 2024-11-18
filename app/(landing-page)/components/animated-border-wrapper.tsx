export default function AnimatedBorderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="card-wrapper w-[196px] h-[148px] rounded-xl">
      {children}
    </div>
  );
}
