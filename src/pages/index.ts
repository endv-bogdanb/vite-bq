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
    component: Notification,
    icon: "notification",
    name: "Notification",
    path: "/notitification",
  },
] as const;
