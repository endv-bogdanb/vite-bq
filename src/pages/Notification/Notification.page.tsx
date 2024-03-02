import { type FC, useState } from "react";
import { BqTab, BqTabGroup } from "@beeq/react";
import { Container, Show } from "@/components";
import {
  CreateElementNotificationTab,
  PortalNotificationTab,
  PortalToastTab,
} from "./components";

export const Notification: FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>("portal-notification");

  return (
    <>
      <BqTabGroup
        value={activeTabId}
        onBqChange={(event) => {
          setActiveTabId(event.detail.value);
        }}
      >
        <BqTab tabId="portal-notification" controls={""}>
          Portal notification
        </BqTab>
        <BqTab tabId="create-element-notification" controls={""}>
          Create element notification
        </BqTab>
        <BqTab tabId="portal-toast" controls={""}>
          Portal toast
        </BqTab>
      </BqTabGroup>
      <Container>
        <Show
          show={activeTabId === "portal-notification"}
          component={PortalNotificationTab}
        />
        <Show
          show={activeTabId === "create-element-notification"}
          component={CreateElementNotificationTab}
        />
        <Show
          show={activeTabId === "portal-toast"}
          component={PortalToastTab}
        />
      </Container>
    </>
  );
};
