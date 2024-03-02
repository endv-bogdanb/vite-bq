import { type FC, type ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { type TToastPlacement } from "@beeq/core";
import { PLACEMENTS } from "../../utils";

export interface ToastPortalProps {
  children: ReactNode;
  placement: TToastPlacement;
}

export const ToastPortal: FC<ToastPortalProps> = ({ children, placement }) => {
  const toastPortal = useRef<HTMLDivElement>(
    Object.assign(document.createElement("div"), {
      className: "bq-toast-portal",
    }),
  ).current;

  useEffect(() => {
    toastPortal.classList.remove(...PLACEMENTS);
    toastPortal.classList.add(placement);
  }, [placement, toastPortal]);

  useEffect(() => {
    document.body.append(toastPortal);
    return () => {
      toastPortal.remove();
    };
  }, [toastPortal]);

  return createPortal(children, toastPortal);
};
