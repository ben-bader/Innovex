# Innovex Tech Event Explorer

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-0CAADC?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![NextAuth](https://img.shields.io/badge/NextAuth.js-111111?style=for-the-badge&logo=nextauth.js&logoColor=white)](https://next-auth.js.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

**Innovex Tech Event Explorer** is a modern, full-stack web application that allows users to discover, explore, and manage tech events worldwide, offering a secure and highly interactive user experience.

---

## 🚀 Features
- 🔐 **JWT Authentication**: Secure authentication using NextAuth.js with JWT strategy  
- 👤 **User Accounts**: Sign up, sign in, and manage favorites  
- 🌐 **Event Discovery**: Browse and explore tech events effortlessly  
- ❤️ **Favorites System**: Save and manage favorite events  
- 🎨 **Smooth Animations**: Polished UI interactions powered by Framer Motion  
- 📱 **Responsive Design**: Fully responsive layout using Tailwind CSS  
- 🗄️ **Database Management**: Prisma ORM with PostgreSQL or Neon  
- ⚡ **High Performance**: Server-side rendering with Next.js deployed on Vercel  
- 🌎 **OAuth Providers**: Supports Google and GitHub login  
- 🧹 **Code Quality**: ESLint configured for consistent and clean code  

---

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js (JWT-based sessions + OAuth providers)
- **Database**: PostgreSQL or Neon
- **ORM**: Prisma
- **Animations**: Framer Motion
- **Linting**: ESLint
- **Version Control**: Git & GitHub
- **Deployment**: Vercel 

---

## 💻 Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/ben-bader/innovex.git
    cd innovex

2. **Install dependencies**
    ```bash
    npm install
    # or
    yarn install

3. **Set up environment variables**

Create a .env file in the root directory:

    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
    NEXTAUTH_URL="http://localhost:3000"
    NEXTAUTH_SECRET="your-secret-key"
    GOOGLE_CLIENT_ID="your-google-client-id"
    GOOGLE_CLIENT_SECRET="your-google-client-secret"
    GITHUB_ID="your-github-client-id"
    GITHUB_SECRET="your-github-client-secret"



4. **Run Prisma migrations**

    ```bash
    npx prisma migrate dev

5. **Check code quality with ESLint**
    ```bash
    # Check for linting issues
    npm run lint

    # Auto-fix linting issues (if available)
    npm run lint:fix
6. **Start the development server**

    ```bash
    npm run dev
    # or
    yarn dev


Open http://localhost:3000
 in your browser.
 
--- 

## 📷 Preview
![Preview](./public/Images/preview.png)
    
--- 

## 📝 Usage

1. Sign up or log in to explore tech events.

2. Browse events by category, location, or popularity.

3. Click on an event to view details and buy ticket.

4. Enjoy smooth animations and interactive UI elements.

5. Secure API calls with JWT tokens for protected endpoints.

--- 

## 🌟 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository

2. Create your feature branch (git checkout -b feature-name)

3. Commit your changes (git commit -m 'Add feature')

4. Push to the branch (git push origin feature-name)

5. Submit a pull request

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🔗 Useful Resources

- **Next.js** – [Official Documentation](https://nextjs.org/docs)  
- **NextAuth.js** – [Authentication Guide](https://next-auth.js.org/getting-started/introduction)  
- **Google OAuth** – [Google Identity Platform](https://developers.google.com/identity)  
- **GitHub OAuth** – [GitHub Developer Apps](https://docs.github.com/en/developers/apps/building-oauth-apps)  
- **JWT (JSON Web Tokens)** – [JWT Introduction](https://jwt.io/introduction)  
- **Prisma ORM** – [Prisma Documentation](https://www.prisma.io/docs/)  
- **PostgreSQL** – [Official PostgreSQL Docs](https://www.postgresql.org/docs/)  
- **Neon (Serverless Postgres)** – [Neon Docs](https://neon.tech/docs/)  
- **Tailwind CSS** – [Tailwind CSS Documentation](https://tailwindcss.com/docs)  
- **Framer Motion** – [Framer Motion Docs](https://www.framer.com/docs/)  
- **ESLint** – [ESLint Configuration Guide](https://eslint.org/docs/user-guide/configuring/)  
- **Vercel** – [Deployment Guide](https://vercel.com/docs)  

