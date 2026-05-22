import { api } from "@/shared/lib/api";

export const ordersService = {
  getAll: async (params?: any) => {
    const res = await api.get("/orders", { params });
    return res.data;
  },

  getById: async (id: number) => {
    const res = await api.get(`/orders/${id}`);
    return res.data;
  },
};