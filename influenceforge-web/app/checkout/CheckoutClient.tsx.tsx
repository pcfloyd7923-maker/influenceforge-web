"use client";

import { useSearchParams } from "next/navigation";

export default function CheckoutClient() {
  const searchParams = useSearchParams();
  const plan = (searchParams.get("plan") || "starter").toLowerCase();

  return (
    <div style={{ padding: 24 }}>
      Checkout page. Plan: <b>{plan}</b>
    </div>
  );
}

