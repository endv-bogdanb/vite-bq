import { type FC, useState } from "react";
import { BqTab, BqTabGroup } from "@beeq/react";
import { TabPanel } from "@/components";
import {
  CreateElementNotificationTabPanel,
  PortalNotificationTabPanel,
  PortalToastTabPanel,
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
      <TabPanel activeTabId={activeTabId} tabId="portal-notification">
        <PortalNotificationTabPanel />
      </TabPanel>
      <TabPanel activeTabId={activeTabId} tabId="create-element-notification">
        <CreateElementNotificationTabPanel />
      </TabPanel>
      <TabPanel activeTabId={activeTabId} tabId="portal-toast">
        <PortalToastTabPanel />
      </TabPanel>
    </>
  );
};
