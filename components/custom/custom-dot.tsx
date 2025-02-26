export default function CustomDot({ className = "" }: { className?: string }) {
  return (
    <div
      className={`min-w-3 h-3 rotate-45 rounded-[2px] bg-dot-gradient ${className}`}
    />
  );
}
