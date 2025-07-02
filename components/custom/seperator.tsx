import clsx from "clsx";

export default function Seperator({
  orientation = "vertical",
  className = "",
}: {
  orientation?: "horizontal" | "vertical";
  className?: string;
}) {
  return (
    <div
      className={clsx(`bg-stroke ${className}`, {
        "w-full h-[1px]": orientation === "horizontal",
        "w-0.5 h-[30px]": orientation === "vertical",
      })}
    />
  );
}
