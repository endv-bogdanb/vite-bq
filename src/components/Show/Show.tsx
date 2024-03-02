import { type ComponentType } from "react";

export type ShowProps<T extends NonNullable<unknown>> = {
  show: boolean;
  component: ComponentType<T>;
} & T;

export const Show = <T extends NonNullable<unknown>>({
  component: Component,
  show,
  ...props
}: ShowProps<T>) => {
  if (!show) {
    return null;
  } else {
    return <Component {...(props as unknown as T)} />;
  }
};
