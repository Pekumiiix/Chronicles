import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ConnectWalletBtn() {
  return (
    <Button
      type="button"
      variant="outline"
      className="py-3 px-6 rounded-[12px] flex items-center justify-center gap-2 border-stroke h-12 hover:bg-black/5"
    >
      <Image
        src="/assets/auth/wallet.png"
        alt="wallet"
        width={20}
        height={20}
      />
      <span className="text-caption text-sm leading-[170%]">
        Connect Wallet Instead
      </span>
    </Button>
  );
}
