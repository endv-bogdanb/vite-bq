import { type FC, useState } from "react";
import { BqTab, BqTabGroup } from "@bee-q/react";
import { TabPanel } from "@/components";
import { FormikFormTabPanel } from "./components";
import { HookFormTabPanel } from "./components/HookFormTabPanel";

export const Form: FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>("hook-form");

  return (
    <>
      <BqTabGroup
        value={activeTabId}
        onBqChange={(event) => {
          setActiveTabId(event.detail.value);
        }}
      >
        <BqTab tabId="hook-form" controls={""}>
          Hook Form
        </BqTab>
        <BqTab tabId="formik-form" controls={""}>
          Formik form
        </BqTab>
      </BqTabGroup>
      <TabPanel activeTabId={activeTabId} tabId="hook-form">
        <HookFormTabPanel />
      </TabPanel>
      <TabPanel activeTabId={activeTabId} tabId="formik-form">
        <FormikFormTabPanel />
      </TabPanel>
    </>
  );
};
