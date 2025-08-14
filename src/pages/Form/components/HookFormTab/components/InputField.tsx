import { type ComponentProps } from "react";
import {
  type FieldPath,
  type FieldValues,
  useController,
  type UseControllerProps,
} from "react-hook-form";
import { BqInput } from "@beeq/react";

export interface InputFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> extends UseControllerProps<TFieldValues, TName>,
    Omit<ComponentProps<typeof BqInput>, "name" | "defaultValue"> {
  label: string;
}

export const InputField = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  defaultValue,
  label,
  name,
  rules,
  ...props
}: InputFieldProps<TFieldValues, TName>) => {
  const { field, fieldState } = useController({
    control,
    defaultValue,
    name,
    rules,
  });

  return (
    <BqInput
      ref={field.ref}
      name={field.name}
      value={field.value}
      onBqInput={field.onChange}
      onBqBlur={field.onBlur}
      {...props}
      validationStatus={fieldState.invalid ? "error" : "none"}
    >
      <label slot="label">{label}</label>
      {fieldState.error ? (
        <span slot="helper-text">
          {fieldState.error.message || fieldState.error.type}
        </span>
      ) : null}
    </BqInput>
  );
};
