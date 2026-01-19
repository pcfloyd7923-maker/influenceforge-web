import Link from "next/link";

export default function GetStartedPage() {
  const steps = [
    {
      title: "1) Tell me what you’re building",
      desc: "Business type, what you want the site to do (sell, book, capture leads, etc.), and what “done” looks like.",
    },
    {
      title: "2) Pick your vibe + colors",
      desc: "Send 1–3 example sites you like (or just say: modern, bold, luxury, clean, etc.).",
    },
    {
      title: "3) Add your content",
      desc: "Logo (if you have it), tagline, offers, pricing, and any photos. If you don’t have them, we’ll generate placeholders.",
    },
    {
      title: "4) Connect your domain",
      desc: "We’ll point influenceforge.io to Vercel (root + www) and you’re live.",
    },
  ];

  return (
    <main style={styles.page}>
      <section style={styles.container}>
        <div style={styles.header}>
          <p style={styles.kicker}>InfluenceForge</p>
          <h1 style={styles.h1}>Get started</h1>
          <p style={styles.sub}>
            You’re deployed on Vercel. Next, we’ll get your homepage looking right,
            then wire up the domain and checkout when you’re ready.
          </p>

          <div style={styles.actions}>
            <Link href="/" style={styles.primaryBtn}>
              Go to Home
            </Link>

            <a
              href="mailto:peyton.floyd87@gmail.com?subject=InfluenceForge%20-%20Get%20Started&body=What%20I%20want%20to%20build%3A%0A%0AExamples%20I%20like%3A%0A%0ADomain%20status%3A%20(influenceforge.io%20/%20www)%0A%0AAnything%20else%3A"
              style={styles.secondaryBtn}
            >
              Email me your plan
            </a>
          </div>
        </div>

        <div style={styles.grid}>
          {steps.map((s) => (
            <div key={s.title} style={styles.card}>
              <h3 style={styles.cardTitle}>{s.title}</h3>
              <p style={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={styles.footer}>
          <div style={styles.note}>
            <strong>Tip:</strong> If Vercel shows a build error again, it’s almost
            always a small JSX or “server vs client component” issue — screenshot
            the error and I’ll fix it fast.
          </div>

          <div style={styles.footerActions}>
            <a
              href="https://vercel.com/dashboard"
              target="_blank"
              rel="noreferrer"
              style={styles.ghostBtn}
            >
              Open Vercel Dashboard
            </a>

            <a
              href="https://github.com/pcfloyd7923-maker/influenceforge-web"
              target="_blank"
              rel="noreferrer"
              style={styles.ghostBtn}
            >
              Open GitHub Repo
            </a>
          </div>
        </div>
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
  container: {
    maxWidth: 980,
    margin: "0 auto",
  },
  header: {
    maxWidth: 740,
    marginBottom: 28,
  },
  kicker: {
    margin: 0,
    fontSize: 13,
    letterSpacing: 2,
    textTransform: "uppercase",
    opacity: 0.7,
  },
  h1: {
    margin: "10px 0 8px",
    fontSize: 44,
    lineHeight: 1.05,
    letterSpacing: -0.5,
  },
  sub: {
    margin: 0,
    fontSize: 16,
    lineHeight: 1.6,
    opacity: 0.85,
  },
  actions: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginTop: 18,
  },
  primaryBtn: {
    display: "inline-block",
    padding: "12px 14px",
    borderRadius: 12,
    textDecoration: "none",
    color: "#0b0f19",
    background: "white",
    fontWeight: 800,
  },
  secondaryBtn: {
    display: "inline-block",
    padding: "12px 14px",
    borderRadius: 12,
    textDecoration: "none",
    color: "white",
    background: "rgba(255,255,255,0.10)",
    border: "1px solid rgba(255,255,255,0.18)",
    fontWeight: 800,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 14,
    marginTop: 18,
  },
  card: {
    padding: 16,
    borderRadius: 16,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.14)",
  },
  cardTitle: {
    margin: 0,
    fontSize: 16,
    fontWeight: 800,
  },
  cardDesc: {
    margin: "8px 0 0",
    fontSize: 14,
    lineHeight: 1.55,
    opacity: 0.85,
  },
  footer: {
    marginTop: 18,
  },
  note: {
    padding: 14,
    borderRadius: 14,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    fontSize: 14,
    lineHeight: 1.55,
    opacity: 0.9,
  },
  footerActions: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 12,
  },
  ghostBtn: {
    display: "inline-block",
    padding: "10px 12px",
    borderRadius: 12,
    textDecoration: "none",
    color: "white",
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.18)",
    fontWeight: 700,
    fontSize: 13,
  },
};

