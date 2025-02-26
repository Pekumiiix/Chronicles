export default function AnimatedBorderWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`card-wrapper ${
        className ? className : "w-[196px] h-[148px] rounded-xl"
      }`}
    >
      {children}
    </div>
  );
}
