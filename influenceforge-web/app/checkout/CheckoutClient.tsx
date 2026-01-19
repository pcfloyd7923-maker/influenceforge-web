export default function CheckoutClient() { return <div>CHECKOUT CLIENT LOADED</div>; }
"use client";

import { useMemo, useState } from "react";

export default function CheckoutClient() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const emailOk = useMemo(() => {
    return /^\S+@\S+\.\S+$/.test(email.trim());
  }, [email]);

  async function startCheckout() {
    setError(null);

    if (!emailOk) {
      setError("Enter a valid email.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Checkout failed.");
      }

      // expects { url: "https://checkout.stripe.com/..." }
      if (!data?.url) throw new Error("No checkout URL returned.");
      window.location.href = data.url;
    } catch (e: any) {
      setError(e?.message || "Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 34, marginBottom: 8 }}>Checkout</h1>
      <p style={{ opacity: 0.8, marginTop: 0 }}>
        Enter your email and continue to Stripe payment.
      </p>

      <div style={{ marginTop: 20, display: "grid", gap: 10 }}>
        <label style={{ fontWeight: 600 }}>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
          style={{
            padding: "12px 14px",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.18)",
            background: "transparent",
          }}
        />

        {error && (
          <div style={{ color: "#ff6b6b", fontWeight: 600 }}>{error}</div>
        )}

        <button
          onClick={startCheckout}
          disabled={loading}
          style={{
            marginTop: 8,
            padding: "12px 14px",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.18)",
            background: "rgba(255,255,255,0.06)",
            cursor: loading ? "not-allowed" : "pointer",
            fontWeight: 800,
          }}
        >
          {loading ? "Redirecting to Stripe..." : "Continue to Payment"}
        </button>
      </div>
    </main>
  );
}

