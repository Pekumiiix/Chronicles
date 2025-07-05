"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { FormBase, FormField } from "@/components/reusesable/base-form";
import { useEffect } from "react";
import { PostTextBtn } from "../components/post-text-btn";
import { BaseInputOtp } from "@/components/reusesable/base-input-otp";
import { useAuth } from "@/app/contexts/auth";

const verificationSchema = z.object({
  otp: z.string().length(6, { message: "OTP must be 6 characters long" }),
});

export default function VerificationForm({
  setTitle,
  setDescription,
  setRemoveCancel,
  email,
}: IFormProps) {
  const { openAuthModal } = useAuth();

  const form = useForm<z.infer<typeof verificationSchema>>({
    resolver: zodResolver(verificationSchema),
    defaultValues: { otp: "" },
  });

  function onSubmit(data: z.infer<typeof verificationSchema>) {
    console.log("Email submitted:", data.otp);
    openAuthModal("signup", "wallet");
  }

  useEffect(() => {
    setTitle("Verification");
    setDescription(
      `Enter one time authentication code that has been sent to ${email}.`
    );
    setRemoveCancel(false);
  }, [setTitle, setDescription, setRemoveCancel, email]);

  return (
    <FormBase
      form={form}
      onSubmit={onSubmit}
      className="flex flex-col -mt-4 gap-[84px]"
    >
      <div className="flex flex-col gap-3">
        <FormField form={form} name="otp">
          {(field) => <BaseInputOtp {...field} />}
        </FormField>
        <div className="flex items-center gap-2">
          <p className="text-sm text-caption">Expires in 9:43.</p>
          <PostTextBtn
            name="Resend"
            action={() => console.log("This button has been clicked on")}
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-5">
        <Button variant="blue" type="submit" className="w-full h-12">
          Continue
        </Button>

        <PostTextBtn
          name="Change Email Address"
          action={() => openAuthModal("signup", "email")}
        />
      </div>
    </FormBase>
  );
}

interface IFormProps {
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setRemoveCancel: (removeCancel: boolean) => void;
  email: string;
}
