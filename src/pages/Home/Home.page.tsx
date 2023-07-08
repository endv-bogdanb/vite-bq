import { type FC, useState } from "react";
import { BqTab, BqTabGroup } from "@bee-q/react";
import { TabPanel } from "@/components";
import { ButtonTabPanel } from "./components";

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
      </BqTabGroup>
      <TabPanel activeTabId={activeTabId} tabId="button">
        <ButtonTabPanel />
      </TabPanel>
    </>
  );
};
