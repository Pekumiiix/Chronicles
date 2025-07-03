"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormBase } from "@/components/reusesable/base-form";
import { SocialLogin } from "../components/social-login";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { EmailInput } from "../components/email-input";
import { ConnectWalletBtn } from "../components/connect-wallet-btn";
import { PostTextBtn } from "../components/post-text-btn";
import { useAuth } from "@/app/contexts/auth";

const emailSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export default function EmailForm({
  setTitle,
  setDescription,
  onSwitch,
  setEmail,
}: IFormProps) {
  const { openAuthModal } = useAuth();

  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: "" },
  });

  function onSubmit(data: z.infer<typeof emailSchema>) {
    console.log("Email submitted:", data.email);
    setEmail(data.email);
    openAuthModal("signup", "verification");
  }

  useEffect(() => {
    setTitle("Sign Up to Chronicles");
    setDescription(
      "Create an account seamlessly with your email, or use quick sign-up options to get started."
    );
  }, [setTitle, setDescription]);

  return (
    <div className="w-full flex flex-col gap-6">
      <SocialLogin />

      <div className="flex flex-col gap-3">
        <FormBase
          form={form}
          onSubmit={onSubmit}
          className="flex items-center p-2 pl-4 bg-[#F2F2F2] rounded-[12px]"
        >
          <EmailInput
            form={form}
            name="email"
            Icon={ArrowRight}
            type="submit"
          />
        </FormBase>

        <ConnectWalletBtn />

        <div className="flex items-center justify-center gap-2">
          <p className="text-sm text-caption leading-[170%]">
            Already have an account?
          </p>

          <PostTextBtn action={onSwitch} name="Sign In" />
        </div>
      </div>
    </div>
  );
}

interface IFormProps {
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  onSwitch: () => void;
  setEmail: (email: string) => void;
}
