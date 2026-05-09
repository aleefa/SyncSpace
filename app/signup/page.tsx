import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="page-shell">
      <section className="card login-card">
        <div className="brand-row">
          <Image
            src="/logo2.png"
            alt="Project logo"
            width={170}
            height={170}
            className="brand-logo"
          />
          <div className="login-header-text">
            <p className="eyebrow">Create your account</p>
            <h1 className="card-title">Sign up for SyncSpace</h1>
          </div>
        </div>

        <form className="login-form">
          <label htmlFor="name" className="field-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            className="field-input"
          />

          <label htmlFor="email" className="field-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            className="field-input"
          />

          <label htmlFor="password" className="field-label">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Create a password"
            className="field-input"
          />

          <label htmlFor="verifyPassword" className="field-label">
            Verify Password
          </label>
          <input
            id="verifyPassword"
            name="verifyPassword"
            type="password"
            placeholder="Re-enter your password"
            className="field-input"
          />

          <button type="submit" className="primary-btn">
            Sign up
          </button>
        </form>

        <p className="signup-row">
          Already have an account?{" "}
          <Link href="/login" className="text-link strong-link">
            Sign in
          </Link>
        </p>
      </section>
    </main>
  );
}
