import { type ComponentType } from "react";

export type ShowProps<T extends NonNullable<unknown>> = {
  when: boolean;
  component: ComponentType<T>;
} & T;

export const Show = <T extends NonNullable<unknown>>({
  component: Component,
  when,
  ...props
}: ShowProps<T>) => {
  if (!when) {
    return null;
  } else {
    return <Component {...(props as unknown as T)} />;
  }
};
