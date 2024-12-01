export default function BorderBottomGradient() {
  return (
    <div className="flex md:hidden w-full items-center gap-2">
      <div className="h-[1px] bg-bottom-left w-full" />

      <div className="w-3 h-3 rounded-[2px] rotate-45 bg-dot-gradient"></div>

      <div className="h-[1px] bg-bottom-right w-full" />
    </div>
  );
}
