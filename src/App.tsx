import { type FC, StrictMode } from "react";
import { Route, Switch } from "wouter";
import { SideLayout } from "@/components";
import { ROUTES } from "@/pages";

export const App: FC = () => {
  return (
    <StrictMode>
      <SideLayout>
        <Switch>
          {Object.values(ROUTES).map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
        {/* <Home /> */}
      </SideLayout>
    </StrictMode>
  );
};
