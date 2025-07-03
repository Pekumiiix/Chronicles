import { Button } from "@/components/ui/button";

export function PostTextBtn({
  action,
  name,
}: {
  action: () => void;
  name: string;
}) {
  return (
    <Button
      variant="link"
      className="text-[#165EAF] text-sm leading-[170%] font-semibold p-0 w-fit h-fit hover:bg-transparent hover:text-[#165EAF]"
      onClick={action}
    >
      {name}
    </Button>
  );
}
