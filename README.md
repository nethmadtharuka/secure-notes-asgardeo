# Secure Notes — WSO2 Asgardeo Demo

A small React SPA demonstrating authentication via **WSO2 Asgardeo** (Identity Platform).
Signed-in users can add, view, and delete personal notes (stored locally in the browser).

## Tech
- React + Vite
- `@asgardeo/react` SDK for login/logout and session state
- Email OTP passwordless login configured via Asgardeo
- localStorage for note persistence

## Setup
1. Create a free org at https://console.asgardeo.io/
2. Register a Single-Page Application, set redirect URL to `http://localhost:5173`
3. Update `src/main.jsx` with your own Client ID and organization base URL
4. `npm install && npm run dev`

## Why Asgardeo
This project uses WSO2's Asgardeo product for authentication instead of rolling
custom auth, to demonstrate integration with a real identity platform (OAuth2/OIDC
under the hood, managed via WSO2's SDK).