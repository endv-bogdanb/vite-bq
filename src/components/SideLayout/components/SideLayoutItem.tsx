import { type FC } from "react";
import { BqIcon, BqSideMenuItem } from "@beeq/react";
import { Link, useRoute } from "wouter";
import { type ROUTES } from "@/pages";

export interface SideLayoutItemProps {
  route: (typeof ROUTES)[number];
}

export const SideLayoutItem: FC<SideLayoutItemProps> = ({ route }) => {
  const [active] = useRoute(route.path);

  return (
    <Link to={route.path}>
      <BqSideMenuItem active={active}>
        <BqIcon name={route.icon} slot="prefix" />
        {route.name}
      </BqSideMenuItem>
    </Link>
  );
};
