import { type FC, useState } from "react";
import { BqTab, BqTabGroup } from "@beeq/react";
import { Container, Hide, Show } from "@/components";
import { BreadcrumbsTab, ButtonTab } from "./components";

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
      <Container>
        <Hide when={activeTabId !== "button"} component={ButtonTab} />
        <Show
          when={activeTabId === "breadcrumbs"}
          component={BreadcrumbsTab}
          onBack={() => {
            setActiveTabId("button");
          }}
        />
      </Container>
    </>
  );
};
