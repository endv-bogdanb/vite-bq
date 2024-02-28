import { type FC } from "react";
import { BqAccordion, BqAccordionGroup, BqSwitch } from "@beeq/react";
import { useBoolean } from "@/hooks";

export const Accordion: FC = () => {
  const [multiple, { toggle: toggleMultiple }] = useBoolean();
  const [expandAll, { toggle: toggleexpandAll }] = useBoolean();

  return (
    <>
      <BqSwitch name="multiple" onBqChange={toggleMultiple}>
        multiple
      </BqSwitch>
      <BqSwitch name="expandAll" onBqChange={toggleexpandAll}>
        expand all
      </BqSwitch>

      <BqAccordionGroup multiple={multiple} expandAll={expandAll}>
        <BqAccordion>
          <span slot="expand">more</span>
          <span slot="collapse">less</span>
          <span slot="header">First</span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </BqAccordion>
        <BqAccordion>
          <span slot="header">Second</span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </BqAccordion>
        <BqAccordion>
          <span slot="header">Third</span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </BqAccordion>
      </BqAccordionGroup>
    </>
  );
};
