import { type FC, useState } from "react";
import { BqTab, BqTabGroup } from "@bee-q/react";
import { TabPanel } from "@/components";
import { BreadcrumbsTabPanel, ButtonTabPanel } from "./components";

export const Home: FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>("button");

  return (
    <>
      <BqTabGroup
        value={activeTabId}
        onBqChange={(event) => {
          setActiveTabId(event.detail.value);
        }}
      >
        <BqTab tabId="button" controls={""}>
          Button
        </BqTab>
        <BqTab tabId="breadcrumbs" controls={""}>
          Breadcrumbs
        </BqTab>
      </BqTabGroup>
      <TabPanel activeTabId={activeTabId} tabId="button">
        <ButtonTabPanel />
      </TabPanel>
      <TabPanel activeTabId={activeTabId} tabId="breadcrumbs">
        <BreadcrumbsTabPanel
          onBack={() => {
            setActiveTabId("button");
          }}
        />
      </TabPanel>
    </>
  );
};
