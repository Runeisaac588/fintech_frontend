"use client";

import Swal from "sweetalert2";
import { authService } from "@/modules/auth/services/auth.service";

export default function Header({
  onMenu,
}: {
  onMenu: () => void;
}) {

  const handleLogout = async () => {

    const result = await Swal.fire({
      title: "¿Cerrar sesión?",
      text: "Tu sesión actual se cerrará.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#27272a",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
      background: "#18181b",
      color: "#fff",
    });

    if (!result.isConfirmed) return;

    try {
      await authService.logout();
    } catch {}

    // borrar cookie
    document.cookie =
      "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    await Swal.fire({
      icon: "success",
      title: "Sesión cerrada",
      timer: 1200,
      showConfirmButton: false,
      background: "#18181b",
      color: "#fff",
    });

    window.location.href = "/login";
  };

  return (
    <header className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 p-4">

      <button
        className="md:hidden"
        onClick={onMenu}
      >
        ☰
      </button>

      <h1 className="font-semibold">
        Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-zinc-400">
          Admin
        </span>

        <button
          onClick={handleLogout}
          className="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
        >
          Logout
        </button>
      </div>

    </header>
  );
}