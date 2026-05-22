export function OrdersFilters({
  search,
  setSearch,
  status,
  setStatus,
}: any) {
  return (
    <div className="flex gap-2 mb-20">
      
      <input
        className="p-2 bg-zinc-900 border border-zinc-800 rounded"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="p-2 bg-zinc-900 border border-zinc-800 rounded"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">All</option>
        <option value="paid">Paid</option>
        <option value="pending">Pending</option>
        <option value="failed">Failed</option>
        <option value="refunded">Refunded</option>
      </select>

    </div>
  );
}