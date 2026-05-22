"use client";

import DashboardLayout from "@/shared/components/layout/DashboardLayout";
import { useOrders } from "@/modules/orders/hooks/useOrders";
import { useOrderDetail } from "@/modules/orders/hooks/useOrderDetail";
import { OrdersTable } from "@/modules/orders/components/OrdersTable";
import { OrderDetailModal } from "@/modules/orders/components/OrderDetailModal";
import { OrderTimeline } from "@/modules/orders/components/OrderTimeline";
import { Pagination } from "@/modules/orders/components/Pagination";
import { OrdersFilters } from "@/modules/orders/components/OrdersFilters";


import { OrdersSummaryCards } from "@/modules/orders/components/OrdersSummaryCards";
import { OrdersLoading } from "@/modules/orders/components/states/OrdersLoading";
import { OrdersEmpty } from "@/modules/orders/components/states/OrdersEmpty";
import { OrdersError } from "@/modules/orders/components/states/OrdersError";

export default function DashboardPage() {

  const {
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
    totalOrders,
    totalRevenue,
    failedPayments,
  } = useOrders();


  const {
    order,
    open,
    getOrder,
    close,
  } = useOrderDetail();
  return (
    <div className="min-h-screen overflow-x-hidden bg-zinc-950 text-white">
      <DashboardLayout>
        <div className=" min-w-0 space-y-6 p-4">
          <OrdersSummaryCards
            totalOrders={totalOrders}
            totalRevenue={totalRevenue}
            failedPayments={failedPayments}
          />

            <section className="w-full max-w-full min-w-0 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 p-4 md:p-6">           
              
            <OrdersFilters
              search={search}
              setSearch={setSearch}
              status={status}
              setStatus={setStatus}
            />

            {loading && <OrdersLoading />}

            {!loading && error && <OrdersError message={error} />}

            {!loading && !error && orders.length === 0 && <OrdersEmpty />}

            {!loading && !error && orders.length > 0 && (
              <OrdersTable orders={orders} onSelect={getOrder} />
            )}

            <Pagination page={page} setPage={setPage} meta={meta} />
          </section>

          <OrderDetailModal
            open={open}
            order={order}
            loading={loading}
            onClose={close}
          />
        </div>
      </DashboardLayout>
    </div>
  );
  }