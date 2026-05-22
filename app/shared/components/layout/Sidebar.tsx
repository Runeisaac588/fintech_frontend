import { Home, Wallet, ArrowLeftRight } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="h-full w-64 bg-zinc-900 border-r border-zinc-800 p-6 space-y-6">
      
      <h1 className="text-xl font-bold text-emerald-400">
        Fintech App
      </h1>

      <nav className="space-y-3">
        <a className="flex items-center gap-2 hover:text-emerald-400">
          <Home size={18} /> Dashboard
        </a>

      </nav>
    </div>
  );
}