import { defineConfig } from "umi";

export default defineConfig({
  plugins: ['@umijs/plugins/dist/react-query'],
  reactQuery: {},
  routes: [
    { path: "/", component: "index", name:"home" },
    { path: "/docs", component: "docs", name: "docs" },
    { path:"/products", component: "products", name: "products"},
    {path: "/game", component: "game", name:"game"}
  ],
  npmClient: 'pnpm',
});
