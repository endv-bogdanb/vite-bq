import { useEffect } from "react";
import { useBoolean } from "../useBoolean";

export type HtmlDirection = "rtl" | "ltr";

export function useDirection(defaultValue: HtmlDirection = "ltr") {
  const [isLtr, { toggle }] = useBoolean(defaultValue === "ltr");

  useEffect(() => {
    document.body.setAttribute("dir", isLtr ? "ltr" : "rtl");
  }, [isLtr]);

  return { toggle } as const;
}
