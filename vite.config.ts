import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  build: {
    target: "esnext",
    lib: {
      name: "index",
      fileName: "index",
      entry: "src/typeWritter.ts",
      formats: ["es", "cjs", "umd"],
    },
    outDir: "dist",
    emptyOutDir: true,
    minify: true,

    rollupOptions: {
      external: [],
      plugins: [
        dts({
          rollupTypes: true,
          insertTypesEntry: true,
          outDir: "dist/@types",
        }),
        cssInjectedByJsPlugin(),
      ],
      output: {
        exports: "named",
      },
    },
  },
});
