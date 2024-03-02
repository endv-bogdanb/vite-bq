import {
  type Control,
  type FieldValues,
  type FormState,
  type UseFormGetValues,
  useWatch,
} from "react-hook-form";

export interface FormStateDisplayProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  formState: FormState<TFieldValues>;
  getValues: UseFormGetValues<TFieldValues>;
}

export const FormStateDisplay = <TFieldValues extends FieldValues>({
  control,
  formState: { dirtyFields, errors, touchedFields },
  getValues,
}: FormStateDisplayProps<TFieldValues>) => {
  useWatch({ control });
  return (
    <div>
      <div>
        values
        <pre>{JSON.stringify(getValues(), null, 2)}</pre>
      </div>
      <div>
        touched fields
        <pre>{JSON.stringify(touchedFields, null, 2)}</pre>
      </div>
      <div>
        dirty fields
        <pre>{JSON.stringify(dirtyFields, null, 2)}</pre>
      </div>
      <div>
        errors
        <pre>{JSON.stringify(errors, null, 2)}</pre>
      </div>
    </div>
  );
};
