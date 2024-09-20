import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  // Optional if you are following the environments
  const env = loadEnv(mode, "./src/environments/");
  const MICRO_FRONTEND_URL = `${
    env.VITE_CASE_MFE_URL ??
    "http://localhost:5000/assets/microFrontendRemoteEntry.js"
  }`;

  return {
    plugins: [
      react(),
      federation({
        name: "micro-frontend-remote",
        remotes: {
          micro_frontend_remote: MICRO_FRONTEND_URL,
        },
        shared: ["react", "react-dom"],
      }),
    ],
    resolve: {
      alias: {
        "@/": new URL("./src/", import.meta.url).pathname,
      },
    },
    envDir: "src/environments/",
    build: {
      modulePreload: false,
      target: "esnext",
    },
  };
});
