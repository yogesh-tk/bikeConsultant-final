import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { ClerkProvider } from "@clerk/react";
import App from "./App";
import "./styles.css";
import { ui } from "@clerk/ui";

const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function Root() {
  const navigate = useNavigate();

  if (!clerkKey || clerkKey.includes("your_key_here")) {
    return (
      <main className="setup-screen">
        <section className="setup-card">
          <div className="setup-brand">motora<span>.</span></div>
          <p className="eyebrow">ONE-TIME SETUP</p>
          <h1>Add your Clerk key</h1>
          <p>To enable secure login, add your Clerk Publishable Key to a <code>.env</code> file in the project root.</p>
          <pre>VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here</pre>
          <p>Save the file and restart the app with <code>npm run dev</code>.</p>
          <a href="https://dashboard.clerk.com" target="_blank" rel="noreferrer">Open Clerk Dashboard ↗</a>
        </section>
      </main>
    );
  }

  return (
    <ClerkProvider
      publishableKey={clerkKey}
      ui={ui}
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      signInUrl="/login"
      signInFallbackRedirectUrl="/"
      signUpFallbackRedirectUrl="/"
    >
      <App />
    </ClerkProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);
