import { type FC, type ReactNode } from "react";
import classes from "./Container.module.css";

export interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={classes.wrapper}>{children}</div>;
};
