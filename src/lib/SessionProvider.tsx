"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React from "react";

interface SessionProviderProperties {
  children: React.ReactNode;
  session: Session | null;
}

const AuthProvider = ({ children, session }: SessionProviderProperties) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthProvider;
