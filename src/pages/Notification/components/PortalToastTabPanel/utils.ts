import { useState } from "react";
import { type TToastPlacement } from "@beeq/core";

export const PLACEMENTS: TToastPlacement[] = [
  "top-center",
  "top-right",
  "bottom-right",
  "bottom-center",
  "bottom-left",
  "top-left",
];

export const getRandomToastType = () =>
  (["info", "success", "alert", "error", "loading", "custom"] as const)[
    Date.now() % 6
  ];

export const useToast = () => {
  const [Toasts, setToast] = useState<
    Array<{ id: string; type: ReturnType<typeof getRandomToastType> }>
  >([]);

  const enque = () => {
    setToast((draft) => [
      ...draft,
      { id: window.crypto.randomUUID(), type: getRandomToastType() },
    ]);
  };

  const deque = (Toast: (typeof Toasts)[0]) => {
    setToast((draft) => draft.filter(({ id }) => id !== Toast.id));
  };

  return [Toasts, { deque, enque }] as const;
};
