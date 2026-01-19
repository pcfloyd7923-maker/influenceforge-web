export default function GetStartedPage() {
  return (
    <main style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial" }}>
      <section style={{ padding: "72px 24px", maxWidth: 900, margin: "0 auto" }}>
        <a href="/" style={{ color: "inherit", textDecoration: "none", opacity: 0.85 }}>
          ← Back
        </a>

        <h1 style={{ fontSize: 42, margin: "16px 0 10px" }}>Get started</h1>
        <p style={{ fontSize: 16, opacity: 0.9, marginTop: 0 }}>
          Pick your path. We’ll wire checkout (Stripe) next. For now this page confirms routing works.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 14,
            marginTop: 18,
          }}
        >
          {[
            ["Base Blueprint — $399", "Solo creator starter system + templates."],
            ["Pro Blueprint — $500", "Scaling system + funnel templates (most popular)."],
            ["Authority Blueprint — $1000", "Agency mode + DFY clone pipeline."],
          ].map(([title, desc]) => (
            <div
              key={title}
              style={{
                borderRadius: 16,
                padding: 16,
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div style={{ fontWeight: 900 }}>{title}</div>
              <div style={{ opacity: 0.85, marginTop: 8, fontSize: 14, lineHeight: 1.45 }}>
                {desc}
              </div>

              <button
                style={{
                  marginTop: 14,
                  padding: "12px 14px",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "transparent",
                  color: "inherit",
                  fontWeight: 800,
                  width: "100%",
                  cursor: "pointer",
                }}
                onClick={() => alert("Next step: Stripe checkout. We'll add this next.")}
              >
                Continue
              </button>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 18,
            padding: 14,
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.10)",
            background: "rgba(255,255,255,0.02)",
            fontSize: 14,
            opacity: 0.9,
          }}
        >
          <strong>DFY Influencer Clone Upsell:</strong> We’ll add an intake form + quote request next.
        </div>
      </section>

      <style>{`
        body { margin: 0; background: #0b0b10; color: #f5f5f7; }
      `}</style>
    </main>
  );
}
