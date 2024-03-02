import { type FC, StrictMode } from "react";
import { Redirect, Route, Router, Switch } from "wouter";
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
                nest={route.nest}
              />
            ))}
            <Route>
              <Redirect to={ROUTES[0].path} />
            </Route>
          </Switch>
        </SideLayout>
      </Router>
    </StrictMode>
  );
};
