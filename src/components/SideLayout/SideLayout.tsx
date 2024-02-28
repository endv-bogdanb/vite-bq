import { type FC, type ReactNode } from "react";
import { BqSideMenu } from "@beeq/react";
import { useAppVersion } from "@/hooks";
import { ROUTES } from "@/pages";
import { SideLayoutItem } from "./components";

export interface SideLayoutProps {
  children: ReactNode;
}

export const SideLayout: FC<SideLayoutProps> = ({ children }) => {
  const appVersion = useAppVersion();

  return (
    <>
      <BqSideMenu>
        <h2 slot="footer">{appVersion}</h2>
        {ROUTES.map((route) => (
          <SideLayoutItem key={route.path} route={route} />
        ))}
      </BqSideMenu>
      {children}
    </>
  );
};
