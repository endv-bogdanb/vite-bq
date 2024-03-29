import { type FC, useState } from "react";
import { type TToastPlacement } from "@beeq/core";
import { BqButton, BqToast } from "@beeq/react";
import { ToastPortal } from "./components";
import classes from "./PortalToastTab.module.css";
import { PLACEMENTS, useToast } from "./utils";

export const PortalToastTab: FC = () => {
  const [toasts, { deque, enque }] = useToast();
  const [placement, setPlacement] = useState<TToastPlacement>(PLACEMENTS[3]);

  return (
    <>
      <div className={classes.wrapper}>
        <BqButton onClick={enque}>Toggle portal toast</BqButton>
        <label className={classes.select}>
          Change placement
          <select
            value={placement}
            onChange={(event) =>
              setPlacement(event.target.value as TToastPlacement)
            }
          >
            {PLACEMENTS.map((placement) => (
              <option key={placement} value={placement}>
                {placement}
              </option>
            ))}
          </select>
        </label>
      </div>
      <ToastPortal placement={placement}>
        {toasts.map((toast) => {
          return (
            <BqToast
              key={toast.id}
              type={toast.type}
              open
              onBqHide={() => {
                deque(toast);
              }}
            >
              Title {toast.id}
            </BqToast>
          );
        })}
      </ToastPortal>
    </>
  );
};
