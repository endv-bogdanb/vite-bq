import { type FC } from "react";
import { BqBreadcrumb, BqBreadcrumbItem, BqIcon } from "@beeq/react";
import { Link } from "wouter";
import { ROUTES } from "@/pages";

export interface BreadcrumbsTabProps {
  onBack: () => void;
}

export const BreadcrumbsTab: FC<BreadcrumbsTabProps> = ({ onBack: back }) => {
  return (
    <div>
      <BqBreadcrumb>
        <BqBreadcrumbItem>
          <Link to={ROUTES[1].path} asChild>
            <BqIcon name="picture-in-picture" size="16"></BqIcon>
          </Link>
        </BqBreadcrumbItem>
        <BqBreadcrumbItem onBqClick={back}>Buttons</BqBreadcrumbItem>
        <BqBreadcrumbItem>Breadcrumbs</BqBreadcrumbItem>
      </BqBreadcrumb>
    </div>
  );
};
