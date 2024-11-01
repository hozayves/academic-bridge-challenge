import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { defineConfig as defineVitestConfig } from "vitest/config"

// https://vite.dev/config/
export default defineConfig(
  defineVitestConfig({
    plugins: [react()],
    test: {
      setupFiles: ["./tests/setup.ts"],
      environment: "jsdom",
      globals: true,
    },
  })
)
