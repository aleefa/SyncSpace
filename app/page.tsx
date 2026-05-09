import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="showcase-shell">
      <header className="showcase-nav">
        <div className="showcase-brand">
          <Image
            src="/logo2.png"
            alt="SyncSpace logo"
            width={100}
            height={100}
            className="showcase-brand-logo"
            priority
          />
          <div>
            <p className="showcase-brand-title">SyncSpace</p>
            <p className="showcase-brand-subtitle">Smart Team Collaboration</p>
          </div>
        </div>

        {/* <nav className="showcase-links">
          <a href="#">Features</a>
          <a href="#">Workspaces</a>
          <a href="#">Integrations</a>
          <a href="#">About</a>
        </nav> */}

        <Link href="/login" className="showcase-login-btn">
          Login
        </Link>
      </header>

      <section className="showcase-grid">
        <article className="showcase-copy">
          <p className="showcase-kicker">Built for modern Collaboration</p>
          <h1>
          Collaborate <span>in real-time.</span> and Organize without chaos.
          </h1>
          <p className="showcase-description">
          Create, edit, and share notes instantly with your team. SyncSpace makes collaboration smooth, fast, and distraction-free.
          </p>

          <div className="showcase-actions">
            <Link href="/login" className="showcase-primary-btn">
              Get Started
            </Link>
            <a href="#" className="showcase-secondary-btn">
              Explore Features
            </a>
          </div>

          <div className="showcase-metrics">
            <div>
              <p className="metric-value">Real-Time</p>
              <p className="metric-label">Instant Collaboration</p>
            </div>
            <div>
              <p className="metric-value">Secure</p>
              <p className="metric-label">Protected Workspace</p>
            </div>
            <div>
              <p className="metric-value">Scalable</p>
              <p className="metric-label">Built for Growing Teams</p>
            </div>
          </div>
        </article>

        <aside className="showcase-visual" aria-label="Project showcase image">
          <Image
            src="/project1.png"
            alt="SyncSpace project preview"
            fill
            priority
            className="showcase-image"
          />
          <div className="visual-badge">Live collaboration workspace</div>
        </aside>
      </section>
    </main>
  );
}
