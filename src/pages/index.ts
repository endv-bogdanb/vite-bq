import { Dialog } from "./Dialog";
import { Home } from "./Home";
import { Notification } from "./Notification";

export const ROUTES = [
  {
    component: Home,
    icon: "package",
    name: "Home",
    path: "/",
  },
  {
    component: Dialog,
    icon: "picture-in-picture",
    name: "Dialog",
    path: "/dialog",
  },
  {
    component: Notification,
    icon: "notification",
    name: "Notification",
    path: "/notitification",
  },
] as const;
