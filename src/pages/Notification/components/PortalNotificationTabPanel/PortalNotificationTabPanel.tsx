import { type FC } from "react";
import { BqButton, BqNotification } from "@bee-q/react";
import { NotificationPortal } from "./components";
import { useNotification } from "./utils";

export const PortalNotificationTabPanel: FC = () => {
  const [notifications, { deque, enque }] = useNotification();

  return (
    <>
      <BqButton onClick={enque}>Toggle portal notification</BqButton>
      <NotificationPortal>
        {notifications.map((notification) => {
          return (
            <BqNotification
              key={notification.id}
              type={notification.type}
              open
              autoDismiss
              onBqHide={() => {
                deque(notification);
              }}
            >
              Title
              <span slot="body">{notification.id}</span>
            </BqNotification>
          );
        })}
      </NotificationPortal>
    </>
  );
};
