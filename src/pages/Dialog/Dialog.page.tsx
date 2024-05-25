import { type FC, useState } from "react";
import { BqTab, BqTabGroup } from "@beeq/react";
import { Container, Show } from "@/components";
import { RefDialogTab, StateDialogTab } from "./components";

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
      <Container>
        <Show when={activeTabId === "ref-dialog"} component={RefDialogTab} />
        <Show
          when={activeTabId === "state-dialog"}
          component={StateDialogTab}
        />
      </Container>
    </>
  );
};
