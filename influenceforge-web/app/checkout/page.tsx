"use client";

import { useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";

export default function CheckoutPage() {
  const params = useSearchParams();
  const plan = (params.get("plan") || "pro") as "starter" | "pro" | "elite";
  const email = params.get("email") || "";

  const paymentLinks = useMemo(
    () => ({
      starter: "https://buy.stripe.com/REPLACE_STARTER",
      pro: "https://buy.stripe.com/REPLACE_PRO",
      elite: "https://buy.stripe.com/REPLACE_ELITE",
    }),
    []
  );

  useEffect(() => {
    const url = paymentLinks[plan] || paymentLinks.pro;

    // Optional: prefill email on Stripe if your payment link supports it
    // (some setups use ?prefilled_email=)
    const finalUrl = email ? `${url}?prefilled_email=${encodeURIComponent(email)}` : url;

    window.location.href = finalUrl;
  }, [plan, email, paymentLinks]);

  return (
    <main style={{ padding: 40, fontFamily: "system-ui" }}>
      <h1>Redirecting to checkout…</h1>
      <p>If you’re not redirected, check your Stripe payment links in code.</p>
    </main>
  );
}
