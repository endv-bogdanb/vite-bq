import { type FC } from "react";
import { BqButton } from "@bee-q/react";
import { notify } from "./utils";

export const CreateElementNotificationTabPanel: FC = () => {
  return (
    <>
      <BqButton
        onClick={() => {
          notify({
            innerHtml: `
              Title
              <span slot="body">${window.crypto.randomUUID()}</span>
          `,
          });
        }}
      >
        Toggle create element notification
      </BqButton>
    </>
  );
};
