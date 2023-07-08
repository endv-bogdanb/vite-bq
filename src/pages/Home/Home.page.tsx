import { type FC, useState } from "react";
import { BqTab, BqTabGroup } from "@bee-q/react";
import { TabPanel } from "@/components";
import {
  ButtonTabPanel,
  RefDialogTabPanel,
  StateDialogTabPanel,
} from "./components";

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
        <BqTab tabId="ref-dialog" controls={""}>
          Ref Dialog
        </BqTab>
        <BqTab tabId="state-dialog" controls={""}>
          State Dialog
        </BqTab>
      </BqTabGroup>
      <TabPanel activeTabId={activeTabId} tabId="button">
        <ButtonTabPanel />
      </TabPanel>
      <TabPanel activeTabId={activeTabId} tabId="ref-dialog">
        <RefDialogTabPanel />
      </TabPanel>
      <TabPanel activeTabId={activeTabId} tabId="state-dialog">
        <StateDialogTabPanel />
      </TabPanel>
    </>
  );
};
