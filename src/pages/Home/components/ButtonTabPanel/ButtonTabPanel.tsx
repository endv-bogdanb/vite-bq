import { type FC } from "react";
import { BqButton } from "@beeq/react";
import classes from "./ButtonTabPanel.module.css";

export const ButtonTabPanel: FC = () => {
  return (
    <div className={classes.wrapper}>
      <BqButton>default button</BqButton>
      <BqButton className={classes.custom}>custom button</BqButton>
    </div>
  );
};
