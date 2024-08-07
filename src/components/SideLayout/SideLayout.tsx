import { type FC, type ReactNode } from "react";
import { BqSideMenu, BqSwitch } from "@beeq/react";
import { useAppVersion, useDirection } from "@/hooks";
import { ROUTES } from "@/pages";
import { Container } from "..";
import { SideLayoutItem } from "./components";

export interface SideLayoutProps {
  children: ReactNode;
}

export const SideLayout: FC<SideLayoutProps> = ({ children }) => {
  const appVersion = useAppVersion();
  const { toggle } = useDirection();

  return (
    <>
      <BqSideMenu>
        <BqSwitch name="rtl" slot="logo" onBqChange={toggle}>
          ltr
        </BqSwitch>
        <h2 slot="footer">{appVersion}</h2>
        {ROUTES.map((route) => (
          <SideLayoutItem key={route.path} route={route} />
        ))}
      </BqSideMenu>
      <Container>{children}</Container>
    </>
  );
};
