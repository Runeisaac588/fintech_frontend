export function OrderDetailModal({ open, order, loading, onClose }: any) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative bg-zinc-900 w-[500px] p-6 rounded-xl border border-zinc-800 shadow-xl">

        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-bold">Order Details</h2>

          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {loading && (
          <p className="text-zinc-400">Loading...</p>
        )}

        {order && !loading && (
          <div className="space-y-2 text-sm text-zinc-300">
            <p><b>ID:</b> {order.id}</p>
            <p><b>Customer:</b> {order.customer_name}</p>
            <p><b>Email:</b> {order.customer_email}</p>
            <p><b>Amount:</b> ${order.amount}</p>
            <p><b>Status:</b> {order.status}</p>
            <p><b>Payment:</b> {order.payment_method}</p>
            <p>
            <b>Date:</b>{" "}
            {new Date(order.created_at).toLocaleString("es-MX", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            })}
            </p>         
         </div>
        )}

      </div>

    </div>
  );
}