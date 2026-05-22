export function OrdersTable({ orders, onSelect }: any) {
  return (
    <div className="w-full min-w-0 scrollbar-auto overflow-x-auto rounded-xl border border-zinc-800">
      <table className="w-full min-w-[900px] scrollbar-auto text-left text-sm">
        <thead className="border-b border-zinc-800 text-zinc-400">
          <tr>
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">Customer</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Amount</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Method</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o: any) => (
            <tr key={o.id} className="border-b border-zinc-800">
              <td className="whitespace-nowrap px-4 py-3">{o.id}</td>
              <td className="whitespace-nowrap px-4 py-3">{o.customer_name}</td>
              <td className="whitespace-nowrap px-4 py-3">{o.customer_email}</td>
              <td className="whitespace-nowrap px-4 py-3">${o.amount}</td>

              <td className="whitespace-nowrap px-4 py-3">
                <span
                  className={`
                    inline-flex rounded px-2 py-1 text-xs font-medium
                    ${
                      o.status === "paid"
                        ? "bg-green-500 text-black"
                        : o.status === "failed"
                        ? "bg-red-500 text-white"
                        : o.status === "refunded"
                        ? "bg-yellow-400 text-black"
                        : "bg-zinc-800 text-zinc-300"
                    }
                  `}
                >
                  {o.status}
                </span>
              </td>

              <td className="whitespace-nowrap px-4 py-3">{o.payment_method}</td>

              <td className="whitespace-nowrap px-4 py-3">
                <button
                  onClick={() => onSelect(o.id)}
                  className="rounded bg-emerald-500 px-3 py-1 text-xs text-black"
                >
                  Ver detalles
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}