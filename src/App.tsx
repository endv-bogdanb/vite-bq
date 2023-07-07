import { type FC, StrictMode } from "react";
import { Home } from "./pages";

export const App: FC = () => {
  return (
    <StrictMode>
      hello world
      <Home />
    </StrictMode>
  );
};
