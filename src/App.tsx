import { type FC, StrictMode } from "react";
import { SideLayout } from "@/components";
import { Home } from "@/pages";

export const App: FC = () => {
  return (
    <StrictMode>
      <SideLayout>
        <Home />
      </SideLayout>
    </StrictMode>
  );
};
