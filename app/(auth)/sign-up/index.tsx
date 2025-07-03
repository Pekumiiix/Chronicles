"use client";

import EmailForm from "./email-form";
import { useAuth } from "@/app/contexts/auth";
import VerificationForm from "./verification-form";
import WalletForm from "./wallet-form";
import { useState } from "react";

export default function SignUpForm({
  setTitle,
  setDescription,
  onSwitch,
  setRemoveCancel,
}: IFormProps) {
  const { signUpType } = useAuth();
  const [email, setEmail] = useState<string>("");

  if (signUpType === "email") {
    return (
      <EmailForm
        setTitle={setTitle}
        setDescription={setDescription}
        onSwitch={onSwitch}
        setEmail={setEmail}
      />
    );
  }

  if (signUpType === "verification") {
    return (
      <VerificationForm
        setDescription={setDescription}
        setTitle={setTitle}
        setRemoveCancel={setRemoveCancel}
        email={email}
      />
    );
  }

  if (signUpType === "wallet") {
    return (
      <WalletForm
        setDescription={setDescription}
        setTitle={setTitle}
        setRemoveCancel={setRemoveCancel}
        email={email}
      />
    );
  }
}

interface IFormProps {
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  onSwitch: () => void;
  setRemoveCancel: (removeCancel: boolean) => void;
}
