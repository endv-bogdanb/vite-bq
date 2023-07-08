import { type FC, useState } from "react";
import { BqTab, BqTabGroup } from "@bee-q/react";
import { TabPanel } from "@/components";
import { RefDialogTabPanel, StateDialogTabPanel } from "./components";

export const Dialog: FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>("ref-dialog");

  return (
    <>
      <BqTabGroup
        value={activeTabId}
        onBqChange={(event) => {
          setActiveTabId(event.detail.value);
        }}
      >
        <BqTab tabId="ref-dialog" controls={""}>
          Ref Dialog
        </BqTab>
        <BqTab tabId="state-dialog" controls={""}>
          State Dialog
        </BqTab>
      </BqTabGroup>
      <TabPanel activeTabId={activeTabId} tabId="ref-dialog">
        <RefDialogTabPanel />
      </TabPanel>
      <TabPanel activeTabId={activeTabId} tabId="state-dialog">
        <StateDialogTabPanel />
      </TabPanel>
    </>
  );
};
