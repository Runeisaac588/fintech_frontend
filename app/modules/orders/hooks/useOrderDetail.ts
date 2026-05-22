"use client";

import { useState } from "react";
import { ordersService } from "../services/orders.service";

export function useOrderDetail() {
  const [order, setOrder] = useState<any | null>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const getOrder = async (id: number) => {
    try {
      setLoading(true);

      const res = await ordersService.getById(id);
    console.log(res.data)
      setOrder(res.data);
      setOpen(true);

    } finally {
      setLoading(false);
    }
  };

  const close = () => {
    setOpen(false);
    setOrder(null);
  };

  return {
    order,
    open,
    getOrder,
    close,
  };
}