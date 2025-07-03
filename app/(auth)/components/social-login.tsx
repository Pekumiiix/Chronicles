import { Button } from "@/components/ui/button";
import Image from "next/image";

export function SocialLogin() {
  return (
    <div className="grid md:grid-cols-2 gap-3">
      {[
        { img: "/assets/auth/google.png", name: "Google" },
        { img: "/assets/auth/apple.png", name: "Apple" },
      ].map((social) => (
        <Button
          key={social.name}
          variant="outline"
          className="py-3 px-6 rounded-[12px] flex items-center justify-center gap-2 border-stroke hover:bg-black/5 h-12"
        >
          <Image src={social.img} alt={social.name} width={20} height={20} />
          <span className="text-caption text-sm leading-[170%]">
            Continue with {social.name}
          </span>
        </Button>
      ))}
    </div>
  );
}
