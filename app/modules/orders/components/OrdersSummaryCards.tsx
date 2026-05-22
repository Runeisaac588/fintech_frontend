export function OrdersSummaryCards({
  totalOrders,
  totalRevenue,
  failedPayments,
}: any) {
  return (

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div className="min-w-0 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
        <p className="text-sm text-zinc-400">Total órdenes</p>
        <h3 className="mt-2 text-2xl font-bold text-white">
          {totalOrders}
        </h3>
      </div>

      <div className="min-w-0 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
        <p className="text-sm text-zinc-400">Total revenue</p>
        <h3 className="mt-2 text-2xl font-bold text-emerald-400">
          ${totalRevenue.toFixed(2)}
        </h3>
      </div>

      <div className="min-w-0 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
        <p className="text-sm text-zinc-400">Pagos fallidos</p>
        <h3 className="mt-2 text-2xl font-bold text-red-400">
          {failedPayments}
        </h3>
      </div>
    </div>
  );
}