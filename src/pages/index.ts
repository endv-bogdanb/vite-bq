import { Dialog } from "./Dialog";
import { Home } from "./Home";
import { Notification } from "./Notification";

export const ROUTES = [
  {
    component: Home,
    icon: "package",
    name: "Home",
    path: "/vite-bq/",
  },
  {
    component: Dialog,
    icon: "picture-in-picture",
    name: "Dialog",
    path: "/vite-bq/dialog",
  },
  {
    component: Notification,
    icon: "notification",
    name: "Notification",
    path: "/vite-bq/notitification",
  },
] as const;
