export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial" }}>
      {/* Top bar */}
      <header
        style={{
          padding: "18px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
            }}
          />
          <strong style={{ fontSize: 16 }}>InfluenceForge</strong>
        </div>

        <nav style={{ display: "flex", gap: 16, fontSize: 14, opacity: 0.9 }}>
          <a href="#features" style={{ color: "inherit", textDecoration: "none" }}>
            Features
          </a>
          <a href="#pricing" style={{ color: "inherit", textDecoration: "none" }}>
            Pricing
          </a>
          <a href="#faq" style={{ color: "inherit", textDecoration: "none" }}>
            FAQ
          </a>
        </nav>

        <div style={{ display: "flex", gap: 10 }}>
          <a
            href="#pricing"
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.14)",
              textDecoration: "none",
              color: "inherit",
              fontSize: 14,
            }}
          >
            View pricing
          </a>
          <a
            href="#pricing"
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
              textDecoration: "none",
              color: "white",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Get started
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          padding: "72px 24px 40px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            borderRadius: 18,
            padding: "54px 28px",
            background:
              "radial-gradient(1200px 500px at 10% 0%, rgba(124,58,237,0.35), transparent), radial-gradient(900px 500px at 90% 20%, rgba(6,182,212,0.25), transparent)",
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          <p style={{ margin: 0, opacity: 0.85, fontSize: 14 }}>
            AI influencer clones • training blueprints • creator tools
          </p>

          <h1 style={{ fontSize: 52, lineHeight: 1.05, margin: "14px 0 0" }}>
            Build, train, and deploy
            <br />
            AI influencer clones.
          </h1>

          <p style={{ fontSize: 18, opacity: 0.9, marginTop: 14, maxWidth: 720 }}>
            InfluenceForge helps creators and agencies spin up influencer personas, generate content,
            and scale distribution. Sell DFY influencer clones or use your own clone for training
            and sales videos.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 22, flexWrap: "wrap" }}>
            <a
              href="#pricing"
              style={{
                padding: "12px 16px",
                borderRadius: 12,
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                textDecoration: "none",
                color: "white",
                fontWeight: 700,
              }}
            >
              See plans
            </a>
            <a
              href="#features"
              style={{
                padding: "12px 16px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.14)",
                textDecoration: "none",
                color: "inherit",
                fontWeight: 600,
                opacity: 0.95,
              }}
            >
              What you get
            </a>
          </div>

          <div
            style={{
              display: "flex",
              gap: 14,
              marginTop: 26,
              flexWrap: "wrap",
              fontSize: 14,
              opacity: 0.9,
            }}
          >
            <span>✅ Blueprint training</span>
            <span>✅ Subscription tools</span>
            <span>✅ DFY clone build</span>
            <span>✅ Agency-ready</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: "10px 24px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, margin: "0 0 14px" }}>What you get</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 14,
            }}
          >
            {[
              ["Influencer Personas", "Create AI influencer profiles with voice, vibe, and niche."],
              ["Content Engine", "Generate posts, scripts, hooks, and content calendars."],
              ["Training Blueprints", "Step-by-step playbooks creators can follow to scale."],
              ["DFY Clone Builds", "Upsell: we build a custom influencer clone for your customer."],
              ["Creator Sales Clone", "Use a clone of YOU for training videos and sales content."],
              ["Agency Mode", "Manage multiple clients and deliverables under one roof."],
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
                <div style={{ fontWeight: 800, marginBottom: 8 }}>{title}</div>
                <div style={{ opacity: 0.85, fontSize: 14, lineHeight: 1.45 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ padding: "10px 24px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, margin: "0 0 10px" }}>Pricing</h2>
          <p style={{ marginTop: 0, opacity: 0.85 }}>
            Upfront blueprint + optional subscription tools. DFY clone available as an upsell.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 14,
              marginTop: 14,
            }}
          >
            {/* Base */}
            <div
              style={{
                borderRadius: 18,
                padding: 18,
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div style={{ fontWeight: 800, fontSize: 18 }}>Base</div>
              <div style={{ opacity: 0.85, marginTop: 6 }}>For solo creators getting started.</div>
              <div style={{ fontSize: 34, fontWeight: 900, marginTop: 14 }}>$399</div>
              <div style={{ opacity: 0.8, fontSize: 13 }}>one-time blueprint</div>

              <ul style={{ marginTop: 14, opacity: 0.9, lineHeight: 1.8 }}>
                <li>Blueprint training library</li>
                <li>Persona starter templates</li>
                <li>Launch checklist + scripts</li>
              </ul>

              <a
                href="#"
                style={{
                  display: "block",
                  textAlign: "center",
                  marginTop: 14,
                  padding: "12px 14px",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.14)",
                  textDecoration: "none",
                  color: "inherit",
                  fontWeight: 700,
                }}
              >
                Choose Base
              </a>

              <div style={{ marginTop: 10, fontSize: 13, opacity: 0.85 }}>
                Tools subscription: <strong>$29/mo</strong>
              </div>
            </div>

            {/* Pro (featured) */}
            <div
              style={{
                borderRadius: 18,
                padding: 18,
                border: "1px solid rgba(124,58,237,0.55)",
                background:
                  "linear-gradient(180deg, rgba(124,58,237,0.18), rgba(255,255,255,0.02))",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  padding: "6px 10px",
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 800,
                  background: "rgba(124,58,237,0.25)",
                  border: "1px solid rgba(124,58,237,0.45)",
                }}
              >
                Most popular
              </div>

              <div style={{ fontWeight: 800, fontSize: 18 }}>Pro</div>
              <div style={{ opacity: 0.85, marginTop: 6 }}>For creators scaling output & systems.</div>
              <div style={{ fontSize: 34, fontWeight: 900, marginTop: 14 }}>$500</div>
              <div style={{ opacity: 0.8, fontSize: 13 }}>one-time blueprint</div>

              <ul style={{ marginTop: 14, opacity: 0.9, lineHeight: 1.8 }}>
                <li>Everything in Base</li>
                <li>Advanced content engine prompts</li>
                <li>Offer + funnel templates</li>
                <li>Distribution schedule system</li>
              </ul>

              <a
                href="#"
                style={{
                  display: "block",
                  textAlign: "center",
                  marginTop: 14,
                  padding: "12px 14px",
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                  textDecoration: "none",
                  color: "white",
                  fontWeight: 900,
                }}
              >
                Choose Pro
              </a>

              <div style={{ marginTop: 10, fontSize: 13, opacity: 0.9 }}>
                Tools subscription: <strong>$49/mo</strong>
              </div>
            </div>

            {/* Authority */}
            <div
              style={{
                borderRadius: 18,
                padding: 18,
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div style={{ fontWeight: 800, fontSize: 18 }}>Authority</div>
              <div style={{ opacity: 0.85, marginTop: 6 }}>For agencies + DFY clone resellers.</div>
              <div style={{ fontSize: 34, fontWeight: 900, marginTop: 14 }}>$1000</div>
              <div style={{ opacity: 0.8, fontSize: 13 }}>one-time blueprint</div>

              <ul style={{ marginTop: 14, opacity: 0.9, lineHeight: 1.8 }}>
                <li>Everything in Pro</li>
                <li>Client delivery templates</li>
                <li>Agency mode playbook</li>
                <li>DFY clone pipeline checklist</li>
              </ul>

              <a
                href="#"
                style={{
                  display: "block",
                  textAlign: "center",
                  marginTop: 14,
                  padding: "12px 14px",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.14)",
                  textDecoration: "none",
                  color: "inherit",
                  fontWeight: 700,
                }}
              >
                Choose Authority
              </a>

              <div style={{ marginTop: 10, fontSize: 13, opacity: 0.85 }}>
                Tools subscription: <strong>$99/mo</strong>
              </div>
            </div>
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
            <strong>DFY Influencer Clone Upsell:</strong> Offer a custom-built influencer clone for
            your customers (priced separately). We’ll wire this into checkout later with Stripe.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: "10px 24px 70px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, margin: "0 0 14px" }}>FAQ</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 14,
            }}
          >
            {[
              [
                "Is this a one-time payment or subscription?",
                "Blueprints are one-time. Tools are monthly. DFY clone builds are an upsell.",
              ],
              [
                "Can I sell DFY clones to other creators?",
                "Yes — Authority is designed for agencies and resellers. We’ll add client intake flows next.",
              ],
              [
                "Can I make a clone of myself?",
                "Yes — we’ll build a guided intake so you can generate a 'sales/training clone' for videos and scripts.",
              ],
            ].map(([q, a]) => (
              <div
                key={q}
                style={{
                  borderRadius: 16,
                  padding: 16,
                  border: "1px solid rgba(255,255,255,0.10)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div style={{ fontWeight: 800, marginBottom: 8 }}>{q}</div>
                <div style={{ opacity: 0.85, fontSize: 14, lineHeight: 1.45 }}>{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "26px 24px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          opacity: 0.85,
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", fontSize: 13 }}>
          © {new Date().getFullYear()} InfluenceForge • influenceforge.io
        </div>
      </footer>

      {/* Background color */}
      <style>{`
        body {
          margin: 0;
          background: #0b0b10;
          color: #f5f5f7;
        }
      `}</style>
    </main>
  );
}

