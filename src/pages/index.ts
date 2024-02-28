import { Accordion } from "./Accordion";
import { Dialog } from "./Dialog";
import { Form } from "./Form";
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
  {
    component: Form,
    icon: "keyboard",
    name: "Form",
    path: "/form",
  },
  {
    component: Accordion,
    icon: "frame-corners",
    name: "Accordion",
    path: "/accordion",
  },
] as const;
