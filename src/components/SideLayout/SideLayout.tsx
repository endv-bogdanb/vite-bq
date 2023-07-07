import { type FC, type ReactNode } from "react";
import { BqIcon, BqSideMenu, BqSideMenuItem } from "@bee-q/react";
import { useAppVersion } from "@/hooks";

export interface SideLayoutProps {
  children: ReactNode;
}

export const SideLayout: FC<SideLayoutProps> = ({ children }) => {
  const appVersion = useAppVersion();

  return (
    <>
      <BqSideMenu>
        <h1 slot="logo">{appVersion}</h1>
        <BqSideMenuItem active>
          <BqIcon name="package" slot="prefix" />
          Home
        </BqSideMenuItem>
      </BqSideMenu>
      {children}
    </>
  );
};
