import { type FC, type ReactNode } from "react";
import classes from "./TabPanel.module.css";

export interface TabPanelProps {
  activeTabId: string;
  children: ReactNode;
  tabId: string;
}

export const TabPanel: FC<TabPanelProps> = ({
  activeTabId,
  children,
  tabId,
}) => {
  if (activeTabId !== tabId) return null;

  return <div className={classes.wrapper}>{children}</div>;
};
