import { type FC, useState } from "react";
import { BqTab, BqTabGroup } from "@beeq/react";
import { Container, Show } from "@/components";
import { FormikFormTab } from "./components";
import { HookFormTab } from "./components/HookFormTab";

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
      <Container>
        <Show show={activeTabId === "hook-form"} component={HookFormTab} />
        <Show show={activeTabId === "formik-form"} component={FormikFormTab} />
      </Container>
    </>
  );
};
