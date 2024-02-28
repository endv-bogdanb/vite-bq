import { type FC, StrictMode } from "react";
import { Route, Router, Switch } from "wouter";
import { SideLayout } from "@/components";
import { ROUTES } from "@/pages";

export const App: FC = () => {
  return (
    <StrictMode>
      <Router base="/vite-bq">
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
        </SideLayout>
      </Router>
    </StrictMode>
  );
};
