import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";
import path, { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "virtual-modules",
      resolveId(id) {
        if (id === "micro_frontend_remote/FeatureOne")
          return path.resolve(
            "src/micro-frontends/micro_frontend_remote/FeatureOne.d.ts"
          );
      },
    },
  ],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  },
  test: {
    coverage: {
      enabled: true,
      reportsDirectory: "coverage",
      all: true,
      reporter: ["text"],
      exclude: [
        "**/*.spec.*",
        "**/*.types.ts",
        "**.config.*",
        "src/environments",
        "dist",
        "public",
      ],
    },
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],
  },
});
