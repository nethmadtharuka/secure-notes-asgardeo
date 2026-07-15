# Secure Notes — WSO2 Asgardeo Authentication Demo

A React single-page application demonstrating real-world identity and access management
integration using **WSO2 Asgardeo** (WSO2 Identity Platform's cloud IDaaS product).

🔗 Live repo: https://github.com/nethmadtharuka/secure-notes-asgardeo

## What it does
Users sign in via Asgardeo (passwordless email OTP), then can add, view, and delete
personal notes. Session state, sign-in/sign-out, and user identity are all handled
through the Asgardeo React SDK — no custom auth logic written by hand.

## Why this project
Built to gain hands-on experience with WSO2's identity platform beyond documentation —
configuring an actual application, login flow, and passwordless authentication method
end-to-end, then integrating the resulting OIDC flow into a working frontend.

## Tech stack
- React + Vite
- `@asgardeo/react` SDK — authentication, session management, user context
- WSO2 Asgardeo — Single-Page Application registration, Email OTP passwordless login flow
- localStorage — note persistence

## Key WSO2/Asgardeo features used
- OAuth2/OIDC-based Single-Page Application registration
- Custom Login Flow configuration (Email OTP passwordless, in place of default username/password)
- `@asgardeo/react` SDK components: `SignedIn`, `SignedOut`, `SignInButton`, `SignOutButton`, `User`

## Setup
1. Create a free organization at https://console.asgardeo.io/
2. Register a Single-Page Application, set redirect URL to `http://localhost:5173`
3. Update `src/main.jsx` with your own Client ID and organization base URL
4. `npm install && npm run dev`

## Screenshots
_(add 1–2 screenshots here — sign-in screen, notes app)_
