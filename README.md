# React (Vite) Frontend Setup

This guide provides instructions for setting up a **React frontend** using **Vite** to integrate with a NestJS backend.

## 🚀 Setup

### 1️⃣ Install Dependencies

Ensure you have **Node.js** installed, then run:

```sh
npm install
```

This will install all required dependencies.

### 2️⃣ Configure Environment Variables

Create a `.env.local` file in the project root and define the following variable:

```ini
VITE_API_URL=http://localhost:3000
```

Ensure that `VITE_API_URL` correctly points to your running backend.

### 3️⃣ Start Development Server

To start the **React application** in development mode, run:

```sh
npm run dev
```

This will start a local development server with **hot module replacement (HMR)**.

### 4️⃣ Build for Production

To generate an optimized production build, execute:

```sh
npm run build
```

This will create a `dist/` folder with optimized assets for deployment.

## 🎯 Additional Notes

- Ensure your backend is running before accessing the frontend.
- You can customize the **API URL** by modifying `.env.local`.
- Consider using **Docker** for a containerized setup.

**Happy coding! 🚀**
