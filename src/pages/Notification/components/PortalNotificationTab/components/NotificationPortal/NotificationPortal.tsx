import { type FC, type ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export interface NotificationPortalProps {
  children: ReactNode;
}

export const NotificationPortal: FC<NotificationPortalProps> = ({
  children,
}) => {
  const notificationPortal = useRef<HTMLDivElement>(
    Object.assign(document.createElement("div"), {
      className: "bq-notification-portal",
    }),
  ).current;

  useEffect(() => {
    document.body.append(notificationPortal);
    return () => {
      notificationPortal.remove();
    };
  }, [notificationPortal]);

  return createPortal(children, notificationPortal);
};
