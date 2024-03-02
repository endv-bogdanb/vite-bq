import { type ComponentType } from "react";
import { Show } from "..";

export type HideProps<T extends NonNullable<unknown>> = {
  hide: boolean;
  component: ComponentType<T>;
} & T;

export const Hide = <T extends NonNullable<unknown>>({
  component: Component,
  hide,
  ...props
}: HideProps<T>) => {
  return (
    <Show show={!hide} component={Component} {...(props as unknown as T)} />
  );
};
