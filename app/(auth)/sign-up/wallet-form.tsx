"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormBase } from "@/components/reusesable/base-form";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { EmailInput } from "../components/email-input";
import { useAuth } from "@/app/contexts/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const emailSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export default function WalletForm({
  setTitle,
  setDescription,
  setRemoveCancel,
  email,
}: IFormProps) {
  const { openAuthModal } = useAuth();

  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: email },
  });

  function onSubmit(data: z.infer<typeof emailSchema>) {
    console.log("Email submitted:", data.email);
    openAuthModal("signup", "verification");
  }

  useEffect(() => {
    setTitle("Create Wallet");
    setDescription("Signing up will create a new wallet using this email.");
    setRemoveCancel(false);
  }, [setTitle, setDescription, setRemoveCancel]);

  return (
    <div className="flex flex-col">
      <FormBase
        form={form}
        onSubmit={onSubmit}
        className="flex flex-col gap-10"
      >
        <div className="flex items-center p-2 pl-4 bg-[#F2F2F2] rounded-[12px]">
          <EmailInput
            form={form}
            name="email"
            Icon={ArrowRight}
            type="button"
          />
        </div>

        <div className="flex flex-col gap-3">
          <Button variant="blue" type="button" className="h-12">
            Sign Up and Create Wallet
          </Button>

          <Button
            variant="ghost"
            className="h-12 w-full py-3 px-4 pr-2 bg-[#F2f2f2] font-semibold text-caption hover:bg-red-400"
          >
            Cancel
          </Button>
        </div>

        <p className="text-center text-sm leading-[170%] text-caption">
          By creating an account you accept our{" "}
          <Link href="/" className="text-[#165EAF]">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href="/" className="text-[#165EAF]">
            Privacy Policy
          </Link>
        </p>
      </FormBase>
    </div>
  );
}

interface IFormProps {
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setRemoveCancel: (shouldRemove: boolean) => void;
  email: string;
}
