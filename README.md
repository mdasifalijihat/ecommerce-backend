# E-Commerce Backend (Express + TypeScript)

This is a robust, production-ready backend application built with **Express.js**, **TypeScript**, and **pnpm** package manager. It comes pre-configured with modern strict linting, automatic code formatting, and optimized hot-reloading configurations.

---

## 🚀 Key Features

- **TypeScript Integration**: Strict type-checking and modern compilation target (`ES2022`).
- **Fast Development Cycle**: Fast live-reloading and script execution powered by `tsx` (TypeScript Execute).
- **Code Quality**: Modern ESLint 10+ (Flat Config system) alongside `typescript-eslint`.
- **Formatting**: Code layouts automated seamlessly via `Prettier`.
- **Security Controls**: Pre-configured Cross-Origin Resource Sharing (`CORS`) and encrypted environment variables (`dotenv`).

---

## 🛠️ Prerequisites

Before starting the backend, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org) (v18.x or newer recommended)
- [pnpm](https://pnpm.io) package manager (`npm i -g pnpm`)

---

## ⚙️ Project Setup

1. **Clone or navigate into your project folder:**

   ```bash
   cd c:/projects/ecommerce/backend
   ```

2. **Install all project dependencies:**

   ```bash
   pnpm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file at the root of the project and add your configurations:
   ```env
   PORT=5000
   NODE_ENV=development
   ```

---

## 📜 Available Scripts

Run the following commands using `pnpm`:

| Command         | Action                                                                             |
| :-------------- | :--------------------------------------------------------------------------------- |
| `pnpm dev`      | Starts the local dev server using `tsx watch` with instant hot-reloading.          |
| `pnpm build`    | Compiles `.ts` source files down to browser/Node-ready `.js` files inside `dist/`. |
| `pnpm start`    | Runs the compiled application production code (`node dist/server.js`).             |
| `pnpm lint`     | Statically runs code analysis checks to find potential bugs or type issues.        |
| `pnpm lint:fix` | Automatically repairs common quality violations and formatting errors.             |
| `pnpm format`   | Automatically standardizes project spacing and code style rules using Prettier.    |

---

## 📁 Directory Structure

```text
├── dist/                 # Production compiled JavaScript outputs
├── node_modules/         # Local node dependency store
├── src/
│   ├── app.ts            # Main Express application configuration & routing setup
│   └── server.ts         # Asynchronous bootstrap and network initialization server
├── .env                  # Private configurations and credential parameters (Ignored)
├── .gitignore            # Git exclusion mapping template
├── eslint.config.js      # Global linting and strict verification configurations
├── package.json          # Dependency packages and script lifecycle triggers
├── .prettierrc           # Global spacing and indentation specifications
└── tsconfig.json         # Strict TypeScript compiler constraints mapping
```
