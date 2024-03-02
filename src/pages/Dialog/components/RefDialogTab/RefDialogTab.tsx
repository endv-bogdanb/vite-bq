import { type FC, useCallback, useRef } from "react";
import { BqButton, BqDialog, BqIcon } from "@beeq/react";
import classes from "./RefDialogTab.module.css";

export const RefDialogTab: FC = () => {
  const ref = useRef<HTMLBqDialogElement>(null);

  const show = useCallback(() => {
    ref.current?.show();
  }, []);

  const hide = useCallback(() => {
    ref.current?.hide();
  }, []);

  return (
    <>
      <BqButton
        onBqClick={show}
        variant="ghost"
        appearance="primary"
        justify-content="center"
        size="medium"
        type="button"
      >
        Deactive account
      </BqButton>
      <BqDialog ref={ref} size="medium" footerAppearance="standard">
        <h3 className={classes.dialogTitle} slot="title">
          <BqIcon
            name="info"
            size="30"
            color="icon--danger"
            role="img"
            title="Danger"
            weight="regular"
            class="hydrated"
          />
          Deactivate account
        </h3>
        <p>
          Are your sure you want to deactivate your account? All of your data
          will be permanently removed.
        </p>
        <span className={classes.undoneAction}>
          This action cannot be undone
        </span>
        <div className={classes.footer} slot="footer">
          <BqButton
            appearance="secondary"
            justify-content="center"
            size="medium"
            type="button"
            variant="standard"
            class="hydrated"
            onBqClick={hide}
          >
            Cancel
          </BqButton>
          <BqButton
            variant="danger"
            appearance="primary"
            justify-content="center"
            size="medium"
            type="button"
            class="hydrated"
            onBqClick={hide}
          >
            Yes, deactive
          </BqButton>
        </div>
      </BqDialog>
    </>
  );
};
