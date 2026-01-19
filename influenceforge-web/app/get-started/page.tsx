"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Plan = {
  id: "starter" | "pro" | "elite";
  name: string;
  price: string;
  bullets: string[];
  popular?: boolean;
};

export default function GetStartedPricingPage() {
  const router = useRouter();

  const plans: Plan[] = useMemo(
    () => [
      {
        id: "starter",
        name: "Starter",
        price: "$29/mo",
        bullets: ["Landing page", "Basic lead capture", "Email support"],
      },
      {
        id: "pro",
        name: "Pro",
        price: "$79/mo",
        popular: true,
        bullets: ["Multi-page site", "Lead capture + automation ready", "Priority support"],
      },
      {
        id: "elite",
        name: "Elite",
        price: "$199/mo",
        bullets: ["Full funnel buildout", "Checkout + upsells", "1:1 setup help"],
      },
    ],
    []
  );

  const [email, setEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<Plan["id"]>("pro");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);

    if (!email.trim() || !email.includes("@")) {
      setErr("Enter a valid email.");
      return;
    }

    setLoading(true);
    try {
      // Save lead
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, plan: selectedPlan, source: "pricing" }),
      });

      if (!res.ok) throw new Error("Failed to save email");

      // Go to checkout page (internal)
      router.push(`/checkout?plan=${selectedPlan}&email=${encodeURIComponent(email)}`);
    } catch (e) {
      setErr("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={styles.page}>
      <section style={styles.container}>
        <header style={styles.header}>
          <p style={styles.kicker}>InfluenceForge</p>
          <h1 style={styles.h1}>Pricing</h1>
          <p style={styles.sub}>
            Pick a plan, drop your email, and you’ll be taken to checkout.
          </p>
        </header>

        <div style={styles.grid}>
          {plans.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setSelectedPlan(p.id)}
              style={{
                ...styles.card,
                ...(selectedPlan === p.id ? styles.cardActive : {}),
              }}
            >
              {p.popular && <div style={styles.badge}>Most Popular</div>}
              <h3 style={styles.cardTitle}>{p.name}</h3>
              <div style={styles.price}>{p.price}</div>
              <ul style={styles.list}>
                {p.bullets.map((b) => (
                  <li key={b} style={styles.listItem}>
                    {b}
                  </li>
                ))}
              </ul>
              <div style={styles.selectHint}>
                {selectedPlan === p.id ? "Selected" : "Select"}
              </div>
            </button>
          ))}
        </div>

        <form onSubmit={onSubmit} style={styles.form}>
          <label style={styles.label}>
            Email to send your receipt + onboarding
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={styles.input}
              autoComplete="email"
            />
          </label>

          {err && <div style={styles.error}>{err}</div>}

          <button type="submit" style={styles.primaryBtn} disabled={loading}>
            {loading ? "Continuing..." : "Continue to Checkout"}
          </button>

          <p style={styles.small}>
            By continuing, you agree to be contacted about your purchase & onboarding.
          </p>
        </form>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    padding: "48px 16px",
    background:
      "radial-gradient(1200px 600px at 20% 0%, rgba(255,255,255,0.10), transparent 60%)," +
      "radial-gradient(900px 500px at 90% 20%, rgba(255,255,255,0.08), transparent 55%)," +
      "#0b0f19",
    color: "white",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
  },
  container: { maxWidth: 980, margin: "0 auto" },
  header: { maxWidth: 720, marginBottom: 20 },
  kicker: { margin: 0, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", opacity: 0.7 },
  h1: { margin: "10px 0 8px", fontSize: 44, lineHeight: 1.05, letterSpacing: -0.5 },
  sub: { margin: 0, fontSize: 16, lineHeight: 1.6, opacity: 0.85 },

  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 },

  card: {
    textAlign: "left",
    padding: 16,
    borderRadius: 16,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.14)",
    cursor: "pointer",
  },
  cardActive: { border: "1px solid rgba(255,255,255,0.45)", background: "rgba(255,255,255,0.10)" },
  badge: {
    display: "inline-block",
    padding: "4px 8px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 800,
    background: "rgba(255,255,255,0.16)",
    border: "1px solid rgba(255,255,255,0.20)",
    marginBottom: 10,
  },
  cardTitle: { margin: 0, fontSize: 18, fontWeight: 900 },
  price: { marginTop: 8, fontSize: 26, fontWeight: 900 },
  list: { margin: "10px 0 0", paddingLeft: 18, opacity: 0.9 },
  listItem: { marginBottom: 6, fontSize: 14, lineHeight: 1.45 },
  selectHint: { marginTop: 12, fontSize: 13, fontWeight: 800, opacity: 0.85 },

  form: {
    marginTop: 18,
    padding: 16,
    borderRadius: 16,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
  },
  label: { display: "block", fontSize: 13, fontWeight: 800, opacity: 0.9 },
  input: {
    marginTop: 8,
    width: "100%",
    padding: "12px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(0,0,0,0.25)",
    color: "white",
    outline: "none",
    fontSize: 14,
  },
  primaryBtn: {
    marginTop: 12,
    width: "100%",
    padding: "12px 14px",
    borderRadius: 12,
    border: "none",
    background: "white",
    color: "#0b0f19",
    fontWeight: 900,
    cursor: "pointer",
  },
  error: { marginTop: 10, color: "#ffb4b4", fontWeight: 800, fontSize: 13 },
  small: { margin: "10px 0 0", fontSize: 12, opacity: 0.75 },
};


