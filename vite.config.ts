import { defineConfig } from "vite";
import react from "../vite-project/node_modules/@vitejs/plugin-react-swc/index.cjs";
// import tailwindcss from "tailwindcss";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
