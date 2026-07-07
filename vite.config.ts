import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv, type Plugin } from "vite";
import createPixOrder from "./api/create-pix-order";

function pixOrderApiPlugin(): Plugin {
  return {
    name: "pix-order-api",
    configureServer(server) {
      server.middlewares.use("/api/create-pix-order", (request, response) => {
        void createPixOrder(request, response);
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  Object.assign(process.env, env);

  return {
    plugins: [pixOrderApiPlugin(), react(), tailwindcss()],
  };
});
