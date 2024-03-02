import { useState } from "react";

export const getRandomNotificationType = () =>
  (["error", "info", "neutral", "success", "warning"] as const)[Date.now() % 5];

export const useNotification = () => {
  const [notifications, setNotification] = useState<
    Array<{ id: string; type: ReturnType<typeof getRandomNotificationType> }>
  >([]);

  const enque = () => {
    setNotification((draft) => [
      ...draft,
      { id: window.crypto.randomUUID(), type: getRandomNotificationType() },
    ]);
  };

  const deque = (notification: (typeof notifications)[0]) => {
    setNotification((draft) =>
      draft.filter(({ id }) => id !== notification.id),
    );
  };

  return [notifications, { deque, enque }] as const;
};
