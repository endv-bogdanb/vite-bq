import { type FC } from "react";
import { BqButton } from "@beeq/react";
import styled from "@emotion/styled";
import classes from "./ButtonTab.module.css";

const StyledBqButton = styled(BqButton)({
  "&::part(button)": {
    "&:active": {
      backgroundColor: "var(--bq-corai-500)",
    },
    "&:hover": {
      backgroundColor: "var(--bq-corai-600)",
    },
    backgroundColor: "var(--bq-corai-500)",
    textTransform: "capitalize",
  },
  "--bq-button--medium-paddingX": "var(--bq-spacing-xl)",
  "--bq-button--medium-paddingY": "var(--bq-spacing-xl)",
});

export const ButtonTab: FC = () => {
  return (
    <div className={classes.wrapper}>
      <BqButton>default button</BqButton>
      <BqButton className={classes.custom}>custom button</BqButton>
      <StyledBqButton>styled custom button</StyledBqButton>
    </div>
  );
};
