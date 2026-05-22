"use client";

import { useState } from "react";
import { authService } from "../services/auth.service";
import Swal from "sweetalert2";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await authService.login({
        email,
        password,
      });

      // guardar token
      document.cookie = `token=${res.data.token}; path=/`;

      // éxito
      Swal.fire({
        icon: "success",
        title: "Login exitoso",
        text: "Bienvenido al sistema",
      });

      window.location.href = "/dashboard";

    } catch (error: any) {

      // mensaje del backend
      const message =
        error?.response?.data?.message ||
        "Error en el login";

      Swal.fire({
        icon: "error",
        title: "Error",
        text: message,
      });
    }
  };

  return (
    <div className="w-full max-w-lg rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <form onSubmit={handleLogin} className="space-y-4">
        <h1 className="mb-6 text-2xl font-bold text-white">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
        />

        <button
          className="w-full rounded-lg bg-emerald-500 p-3 font-medium text-black"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}