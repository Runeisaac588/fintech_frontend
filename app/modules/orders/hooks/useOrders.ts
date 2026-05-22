"use client";

import { useEffect, useState } from "react";
import { ordersService } from "../services/orders.service";

export function useOrders() {
  const [orders, setOrders] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const [meta, setMeta] = useState<any>(null);

  const [summary, setSummary] = useState({
    total_orders: 0,
    total_revenue: 0,
    failed_payments: 0,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchOrders = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await ordersService.getAll({
        per_page: 10,
        page,
        search,
        status,
        sort_by: "created_at",
        sort_dir: "desc",
      });

      setOrders(res.data.orders.data);
      setMeta(res.data.orders);
      setSummary(res.data.summary);

      console.log(res)
    } catch {
      setError("No se pudieron cargar las órdenes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [page, search, status]);

  useEffect(() => {
    setPage(1);
  }, [search, status]);

  return {
    orders,
    page,
    setPage,

    search,
    setSearch,
    status,
    setStatus,

    meta,
    loading,
    error,

    totalOrders: summary.total_orders,
    totalRevenue: Number(summary.total_revenue),
    failedPayments: summary.failed_payments,
  };
}