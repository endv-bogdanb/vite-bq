import { type FC } from "react";
import { BqButton, BqInput } from "@bee-q/react";
import { type FormikErrors, useFormik } from "formik";
import { FormStateDisplay } from "./components";
import classes from "./FormikFormTabPanel.module.css";

interface FormValues {
  confirmPassword: string;
  name: string;
  password: string;
}

const validate = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {};

  (
    Object.keys(values) as unknown as (keyof FormikErrors<FormValues>)[]
  ).forEach((key) => {
    if (!values[key]) {
      errors[key] = "Required";
    }
  });

  if (
    values.password &&
    values.confirmPassword &&
    values.password !== values.confirmPassword
  ) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};

export const FormikFormTabPanel: FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      confirmPassword: "",
      name: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate,
  });

  return (
    <div className={classes.wrapper}>
      <form onSubmit={formik.handleSubmit}>
        <BqInput
          id="name"
          name="name"
          value={formik.values.name}
          onBqInput={formik.handleChange}
          onBqBlur={formik.handleBlur}
          validationStatus={
            formik.touched.name && formik.errors.name ? "error" : "none"
          }
          type="text"
        >
          <label slot="label">User name</label>
          {formik.touched.name && formik.errors.name ? (
            <span slot="helper-text">{formik.errors.name}</span>
          ) : null}
        </BqInput>
        <BqInput
          id="password"
          name="password"
          value={formik.values.password}
          onBqInput={formik.handleChange}
          onBqBlur={formik.handleBlur}
          validationStatus={
            formik.touched.password && formik.errors.password ? "error" : "none"
          }
          type="password"
        >
          <label slot="label">Password</label>
          {formik.touched.password && formik.errors.password ? (
            <span slot="helper-text">{formik.errors.password}</span>
          ) : null}
        </BqInput>
        <BqInput
          id="confirmPassword"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onBqInput={formik.handleChange}
          onBqBlur={formik.handleBlur}
          validationStatus={
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? "error"
              : "none"
          }
          type="password"
        >
          <label slot="label">Confirm password</label>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <span slot="helper-text">{formik.errors.confirmPassword}</span>
          ) : null}
        </BqInput>
        <BqButton type="submit">Register</BqButton>
      </form>
      <FormStateDisplay
        values={formik.values}
        touched={formik.touched}
        errors={formik.errors}
      />
    </div>
  );
};
