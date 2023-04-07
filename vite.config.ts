import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import FullReload from "vite-plugin-full-reload";
import wasm from "vite-plugin-wasm";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte(), FullReload("src/**/*"), wasm()],
});
