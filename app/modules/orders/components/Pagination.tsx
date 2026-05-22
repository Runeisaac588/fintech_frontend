export function Pagination({ meta, setPage }: any) {
  if (!meta) return null;

  return (
    <div className="flex gap-2 items-center">

      <button
        disabled={meta.current_page === 1}
        onClick={() => setPage(meta.current_page - 1)}
        className="px-3 py-1 bg-zinc-800 rounded"
      >
        Prev
      </button>

      <span className="text-sm text-zinc-400">
        Page {meta.current_page} of {meta.last_page}
      </span>

      <button
        disabled={meta.current_page === meta.last_page}
        onClick={() => setPage(meta.current_page + 1)}
        className="px-3 py-1 bg-zinc-800 rounded"
      >
        Next
      </button>

    </div>
  );
}