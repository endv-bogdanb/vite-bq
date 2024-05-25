import { type ComponentType } from "react";
import { Show } from "..";

export type HideProps<T extends NonNullable<unknown>> = {
  when: boolean;
  component: ComponentType<T>;
} & T;

export const Hide = <T extends NonNullable<unknown>>({
  component: Component,
  when,
  ...props
}: HideProps<T>) => {
  return (
    <Show when={!when} component={Component} {...(props as unknown as T)} />
  );
};
