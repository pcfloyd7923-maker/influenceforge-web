"use client";

import { useSearchParams } from "next/navigation";

const paymentLinks = {
  starter: "https://buy.stripe.com/REPLACE_STARTER",
  pro: "https://buy.stripe.com/REPLACE_PRO",
  elite: "https://buy.stripe.com/REPLACE_ELITE",
};

export default function CheckoutClient() {
  const searchParams = useSearchParams();
  const plan = (searchParams.get("plan") || "starter").toLowerCase();

  const checkoutUrl =
    paymentLinks[plan as keyof typeof paymentLinks] ?? paymentLinks.starter;

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0b0b0b",
        color: "#fff",
        fontFamily: "system-ui, sans-serif",
        padding: 24,
      }}
    >
      <div
        style={{
          maxWidth: 520,
          width: "100%",
          padding: 32,
          borderRadius: 16,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.12)",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>
          Secure Checkout
        </h1>

        <p style={{ opacity: 0.8, marginBottom: 24 }}>
          Plan selected: <strong>{plan.toUpperCase()}</strong>
        </p>

        <a
          href={checkoutUrl}
          style={{
            display: "block",
            padding: "14px 18px",
            borderRadius: 12,
            background: "#ffffff",
            color: "#000",
            fontWeight: 800,
            textDecoration: "none",
            marginBottom: 12,
          }}
        >
          Continue to Stripe
        </a>

        <p style={{ fontSize: 12, opacity: 0.6 }}>
          Payments are processed securely by Stripe.
        </p>
      </div>
    </main>
  );
}
