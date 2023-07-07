import { type FC } from "react";
import { BqButton, BqIcon } from "@bee-q/react";

export const Home: FC = () => {
  return (
    <div>
      <span>
        <BqIcon name="package" /> Welcome home page
      </span>
      <div>
        <BqButton>Button</BqButton>
      </div>
    </div>
  );
};
