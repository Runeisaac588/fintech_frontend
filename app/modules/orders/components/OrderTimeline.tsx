export function OrderTimeline({ order }: any) {
  const steps = [
    { label: "Created", date: order.created_at },
    order.status === "paid" && { label: "Paid", date: order.updated_at },
    order.status === "failed" && { label: "Failed", date: order.updated_at },
    order.status === "refunded" && { label: "Refunded", date: order.updated_at },
  ].filter(Boolean);

  return (
    <div className="mt-4 space-y-2">
      {steps.map((s: any, i: number) => (
        <div key={i} className="flex justify-between text-sm">
          <span>{s.label}</span>
          <span className="text-zinc-400">{s.date}</span>
        </div>
      ))}
    </div>
  );
}