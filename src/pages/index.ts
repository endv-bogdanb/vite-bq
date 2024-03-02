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
    nest: false,
    path: "/home",
  },
  {
    component: Dialog,
    icon: "picture-in-picture",
    name: "Dialog",
    nest: false,
    path: "/dialog",
  },
  {
    component: Notification,
    icon: "notification",
    name: "Notification",
    nest: false,
    path: "/notitification",
  },
  {
    component: Form,
    icon: "keyboard",
    name: "Form",
    nest: false,
    path: "/form",
  },
  {
    component: Accordion,
    icon: "frame-corners",
    name: "Accordion",
    nest: false,
    path: "/accordion",
  },
] as const;
