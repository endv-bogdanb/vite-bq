import { type FC } from "react";
import { BqBreadcrumb, BqBreadcrumbItem, BqIcon } from "@beeq/react";
import { Link } from "wouter";
import { ROUTES } from "@/pages";

export interface BreadcrumbsTabPanelProps {
  onBack: () => void;
}

export const BreadcrumbsTabPanel: FC<BreadcrumbsTabPanelProps> = ({
  onBack: back,
}) => {
  return (
    <div>
      <BqBreadcrumb>
        <Link to={ROUTES[1].path}>
          <BqBreadcrumbItem>
            <BqIcon name="picture-in-picture" size="16"></BqIcon>
          </BqBreadcrumbItem>
        </Link>
        <BqBreadcrumbItem onBqClick={back}>Buttons</BqBreadcrumbItem>
        <BqBreadcrumbItem>Breadcrumbs</BqBreadcrumbItem>
      </BqBreadcrumb>
    </div>
  );
};
