import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./src/tests/setup.ts"], // adjust path as needed
    globals: true,
  },
})
