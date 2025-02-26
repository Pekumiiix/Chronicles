import CustomDot from "./custom-dot";

export default function BorderBottomGradient() {
  return (
    <div className="flex md:hidden w-full items-center gap-2">
      <div className="h-[1px] bg-bottom-left w-full" />

      <CustomDot />

      <div className="h-[1px] bg-bottom-right w-full" />
    </div>
  );
}
