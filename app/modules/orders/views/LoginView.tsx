"use client";

import { LoginForm } from "../components/LoginForm";

export function LoginView() {
  return (
    <div
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-zinc-950
        p-8
      "
    >
      <LoginForm />
    </div>
  );
}