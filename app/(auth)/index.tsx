"use client";

import BaseModal from "@/components/reusesable/base-modal";
import { useAuth } from "../contexts/auth";
import { useState } from "react";
import SignInForm from "./sign-in/sign-in-form";
import SignUpForm from "./sign-up";

export function AuthModal() {
  const { isAuthModalOpen, authType, closeAuthModal, switchAuthType } =
    useAuth();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [removeCancel, setRemoveCancel] = useState<boolean>(true);

  return (
    <BaseModal
      open={isAuthModalOpen}
      onClose={closeAuthModal}
      cancelOnOverlay
      disableOverlayClick
      title={title}
      description={description}
      removeCancel={removeCancel}
    >
      {authType === "signin" ? (
        <SignInForm
          onSwitch={() => switchAuthType("signup")}
          setTitle={setTitle}
          setDescription={setDescription}
          setRemoveCancel={setRemoveCancel}
        />
      ) : (
        <SignUpForm
          onSwitch={() => switchAuthType("signin")}
          setTitle={setTitle}
          setDescription={setDescription}
          setRemoveCancel={setRemoveCancel}
        />
      )}
    </BaseModal>
  );
}
