import { type FC } from "react";
import {
  type FormikErrors,
  type FormikTouched,
  type FormikValues,
} from "formik";

export interface FormStateDisplayProps {
  errors: FormikErrors<unknown>;
  touched: FormikTouched<unknown>;
  values: FormikValues;
}

export const FormStateDisplay: FC<FormStateDisplayProps> = ({
  errors,
  touched,
  values,
}) => {
  return (
    <div>
      <div>
        values
        <pre>{JSON.stringify(values, null, 2)}</pre>
      </div>
      <div>
        touched fields
        <pre>{JSON.stringify(touched, null, 2)}</pre>
      </div>
      <div>
        errors
        <pre>{JSON.stringify(errors, null, 2)}</pre>
      </div>
    </div>
  );
};
