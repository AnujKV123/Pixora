# 🪄 Pixora.dev

Pixora is an AI-powered application designed to generate, preview, and manage AI-driven applications seamlessly.

![alt text](https://github.com/AnujKV123/Pixora/blob/main/image/Pixor.png?raw=true)

Built with ❤️ using Next.js, tRPC, TanStack Query, PostgreSQL, Inngest, E2B Sandbox, Clerk Authentication, Prisma, Varcel and AI models (OpenAI + Gemini).

## ✨ Features
- ✅ Generate, preview, and deploy AI applications.
- ✅ Secure authentication with Clerk
- ✅ Manage billing via integrated payment gateways.
- ✅ Run background tasks with Inngest.
- ✅ Execute sandboxed AI operations using E2B Sandbox.

## 🧠 Tech Stack

| Layer        | Technology                            |
| ------------ | --------------------------------------|
| **Framework** | Next.js                              |
| **Language** | TypeScript                            |
| **Database** | PostgreSQL + Neon                     |
| **ORM & Queries**   | Prism + tRPC + TanStack Query  |
| **Styling** |  Tailwind CSS + ShadCN/UI              |
| **Authentication** |  Clerk                          |
| **Payments** |  Clerk Payments / Stripe              |
| **AI Models** |  OpenAI + Gemini                     |
| **Background Jobs** |  Inngest                       |
| **Sandboxing** |  E2B Sandbox                        |
| **Deployment** |  Varcel                             |

## 📽️ Demoś
- 🌐 Live Demo: https://www.pixora.dev
- 🎥 Demo Video: Coming Soon

## ⚙️ Setup Instructions

### Project Setup

#### Prerequisites
- Node.js (version 18.19 or higher)
- npm / yarn / pnpm
- PostgreSQL instance (local or hosted on Neon/Supabase)

#### 📥Installation

1. *Clone the repository*
   ```bash
   git clone https://github.com/AnujKV123/Pixora.git
   cd Pixora
   ```

2. *Install dependencies*
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. *Create a .env file with below details:*
   ```bash
   DATABASE_URL=
   NEXT_PUBLIC_APP_URL=http://localhost:3000

   # AI Model OpenAI/Gemini
   GEMINI_API_KEY=
   OpenAI_API_KEY=

   # E2B
   E2B_API_KEY=

   # Clerk
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_SIGN_IN_URL='/sign-in'
   NEXT_PUBLIC_CLERK_SIGN_UP_URL='/sign-up'
   NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL='/'
   NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL='/'
   ```

4. *Database Setup (Prisma + PostgreSQL)*
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

5. *Start the development server*
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. *Open your browser*
   Navigate to `http://localhost:3000` to view the application.

#### 🏗️ Build for Production

```bash
npm run build
# or
yarn build
```

The production build will be optimized and served from .next/.


### 🛠️ E2B Sandbox Setup
   Pixora uses E2B Sandbox to safely run AI-generated apps.
#### Prerequisites
- Docker
- E2B CLI

#### Setup

1. *Install E2B CLI*
   ```bash
   npm i -g @e2b/cli

   ```

2. *Navigate to*
   ```bash
   cd sandbox-templates/nextjs
   ```

3. *Authenticate with E2B*
   ```bash
   e2b auth login
   ```

4. *Build & Deploy Template*
   ```bash
    e2b template build --name <template-name> "/home/user/compile_page.sh"
   ```

## 📌 Future Enhancements

- 📤 Export projects → GitHub repo or downloadable ZIP.

- 🧠 Improve AI prompts & model orchestration for better results.

- 🤝 Add real-time collaboration features

- 📊 Usage analytics & reporting dashboard

## 👨‍💻 Built By
Anuj Verma – [GitHub](https://github.com/AnujKV123) | [LinkedIn](https://www.linkedin.com/in/anujverma11)
