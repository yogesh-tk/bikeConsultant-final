import { Bike, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { SignIn } from "@clerk/react";

function Login() {
  return (
    <main className="login-page">
      <div className="login-shell">
        <Link to="/" className="login-brand" aria-label="Motora home">
          <span className="brand-mark"><Bike size={22} /></span>
          <strong>motora<span className="dot">.</span></strong>
        </Link>
        <section className="login-card">
          <div className="login-head">
            <p className="eyebrow">WELCOME BACK</p>
            <h1>Sign in to Motora</h1>
            <p>Discover your next ride and manage your bike listings.</p>
          </div>
          <div className="clerk-signin-wrap">
            <SignIn
              routing="path"
              path="/login"
              signUpUrl="/sign-up"
              fallbackRedirectUrl="/"
              appearance={{
                layout: { socialButtonsPlacement: "top", socialButtonsVariant: "blockButton" },
                variables: { colorPrimary: "#e85d2a", borderRadius: "10px", fontFamily: "Inter, sans-serif" },
                elements: {
                  // rootBox: "motora-clerk-root",
                  rootBox: {
                    width: "100%",
                    maxWidth: "100%",
                  },
                  cardBox: {
                    border:"none",
                    borderRadius: "none",
                    boxShadow: "none",
                  },
                  card: {
                    borderRadius:"none",
                    border:"none",
                    borderRight:"none",
                    borderBottom:"none",
                    boxShadow: "none",
                    padding: "24px",
                  },
                  // cardBox: "motora-clerk-card-box",
                  // card: "motora-clerk-card",
                  header: "motora-clerk-header",
                  headerTitle: "motora-clerk-title",
                  headerSubtitle: "motora-clerk-subtitle",
                  socialButtonsBlockButton: "motora-clerk-social",
                  dividerRow: "motora-clerk-divider",
                  formFieldLabel: "motora-clerk-label",
                  formFieldInput: "motora-clerk-input",
                  formButtonPrimary: "motora-clerk-primary",
                  footer: "motora-clerk-footer",
                  footerAction: "motora-clerk-footer-action"
                }
              }}

            />
          </div>
          <div className="login-security"><ShieldCheck size={17} /><span>Secure authentication powered by Clerk</span></div>
        </section>
        <Link className="back-home" to="/">← Back to home</Link>
      </div>
    </main>
  );
}

export default Login;
