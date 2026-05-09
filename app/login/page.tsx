import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="page-shell">
      <section className="card login-card">
        <div className="brand-row">
          <Image
            src="/logo2.png"
            alt="Project logo"
            width={110}
            height={110}
            className="brand-logo"
          />
          <div className="login-header-text">
            <p className="eyebrow">Welcome back</p>
            <h1 className="card-title">Sign in to SyncSpace</h1>
          </div>
        </div>

        <form className="login-form">
          <label htmlFor="username" className="field-label">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            className="field-input"
          />

          <label htmlFor="password" className="field-label">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            className="field-input"
          />

          <div className="actions-row">
            <Link href="#" className="text-link">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="primary-btn">
            Sign in
          </button>
        </form>

        <p className="signup-row">
          Not registered yet?{" "}
          <Link href="/signup" className="text-link strong-link">
            Sign up
          </Link>
        </p>
      </section>
    </main>
  );
}