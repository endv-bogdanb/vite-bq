import { type ReactNode } from "react";
import {
  type FieldPath,
  type FieldValues,
  useController,
  type UseControllerProps,
} from "react-hook-form";
import { type JSX } from "@beeq/core";
import { BqSelect } from "@beeq/react";

export interface SelectFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> extends UseControllerProps<TFieldValues, TName>,
    Omit<JSX.BqSelect, "name"> {
  children: ReactNode;
  label: string;
}

export const SelectField = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  children,
  control,
  defaultValue,
  label,
  name,
  rules,
  ...props
}: SelectFieldProps<TFieldValues, TName>) => {
  const { field, fieldState } = useController({
    control,
    defaultValue,
    name,
    rules,
  });

  return (
    <BqSelect
      ref={field.ref}
      name={field.name}
      value={field.value}
      onBqSelect={field.onChange}
      onBqBlur={field.onBlur}
      onBqClear={field.onChange}
      {...props}
      validationStatus={fieldState.invalid ? "error" : "none"}
    >
      <label slot="label">{label}</label>
      {fieldState.error ? (
        <span slot="helper-text">
          {fieldState.error.message || fieldState.error.type}
        </span>
      ) : null}
      {children}
    </BqSelect>
  );
};
