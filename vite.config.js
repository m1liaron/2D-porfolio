import { defineConfig } from "vite";

export default defineConfig({
    base: "/2D-porfolio/",
    build: {
        minify: "terser"
    }
})