import { type FC } from "react";
import { BqButton } from "@beeq/react";
import classes from "./ButtonTab.module.css";

export const ButtonTab: FC = () => {
  return (
    <div className={classes.wrapper}>
      <BqButton>default button</BqButton>
      <BqButton className={classes.custom}>custom button</BqButton>
    </div>
  );
};
