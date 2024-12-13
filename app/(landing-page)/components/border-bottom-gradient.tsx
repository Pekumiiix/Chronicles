export default function BorderBottomGradient() {
  return (
    <div className="flex md:hidden w-full items-center gap-2">
      <div className="h-[1px] bg-bottom-left w-full" />

      <div className="min-w-3 h-3 rotate-45 rounded-[2px] bg-dot-gradient" />

      <div className="h-[1px] bg-bottom-right w-full" />
    </div>
  );
}
