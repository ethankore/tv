import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig((command, mode) => {
  return {
    // https://github.com/vitejs/vite/issues/1973#issuecomment-787571499
    base: mode === "production" ? "/tv/" : "/",
    define: {
      "process.env": {},
    },
    build: {
      outDir: "build",
    },
    plugins: [svgr(), react()],
  };
});
