export function OrdersError({ message }: { message: string }) {
  return (
    <div className="rounded-xl border border-red-900 bg-red-950/40 p-6 text-red-300">
      {message}
    </div>
  );
}