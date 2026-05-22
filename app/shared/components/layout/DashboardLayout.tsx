"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full overflow-x-hidden bg-zinc-950 text-white">
      {/* Sidebar desktop */}
      <div className="hidden shrink-0 md:block">
        <Sidebar />
      </div>

      {/* Sidebar mobile */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />

          <div className="absolute left-0 top-0 h-full w-64">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <Header onMenu={() => setOpen(true)} />

        <main className="w-full min-w-0 space-y-6 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}