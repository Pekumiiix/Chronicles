"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

type AuthType = "signin" | "signup";
type SignUpType = "email" | "verification" | "wallet";

interface AuthContextType {
  isAuthModalOpen: boolean;
  authType: AuthType;
  signUpType: SignUpType;
  openAuthModal: (type: AuthType, Type?: SignUpType) => void;
  closeAuthModal: () => void;
  switchAuthType: (type: AuthType) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState<AuthType>("signin");
  const [signUpType, setSignUpType] = useState<SignUpType>("email");

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const signinParam = searchParams.get("signin");
    const signupParam = searchParams.get("signup");

    if (
      signupParam === "email" ||
      signupParam === "verification" ||
      signupParam === "wallet"
    ) {
      setSignUpType(signupParam);
      setAuthType("signup");
      setIsAuthModalOpen(true);
    } else if (signinParam === "true") {
      setAuthType("signin");
      setIsAuthModalOpen(true);
    } else if (signupParam === "true") {
      setAuthType("signup");
      setIsAuthModalOpen(true);
    }
  }, [searchParams]);

  const openAuthModal = useCallback(
    (type: AuthType, signUpType?: SignUpType) => {
      const params = new URLSearchParams(searchParams.toString());

      setAuthType(type);
      if (signUpType) {
        setSignUpType(signUpType);
        params.set(type, signUpType);
      } else {
        params.set(type, "true");
      }
      router.push(`${pathname}?${params.toString()}`);
      setIsAuthModalOpen(true);
    },
    [router, pathname, searchParams]
  );

  const closeAuthModal = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());

    setIsAuthModalOpen(false);

    params.delete("signin");
    params.delete("signup");

    router.push(`${pathname}?${params.toString()}`);
  }, [searchParams, router, pathname]);

  const switchAuthType = useCallback(
    (type: AuthType) => {
      const params = new URLSearchParams(searchParams.toString());

      params.delete("signin");
      params.delete("signup");

      setAuthType(type);
      params.set(type, "true");
      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, router, pathname]
  );

  return (
    <AuthContext.Provider
      value={{
        isAuthModalOpen,
        authType,
        signUpType,
        openAuthModal,
        closeAuthModal,
        switchAuthType,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
