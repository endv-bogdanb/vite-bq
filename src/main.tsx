import "./index.css";
import ReactDOM from "react-dom/client";
import { setBasePath } from "@beeq/core/dist/components";
import { App } from "./App.tsx";

setBasePath(`/vite-bq/svg`);

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(<App />);
