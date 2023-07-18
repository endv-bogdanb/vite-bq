import { type FC } from "react";
import { useForm } from "react-hook-form";
import { BqButton } from "@bee-q/react";
import { FormStateDisplay, InputField } from "./components";
import classes from "./HookFormTabPanel.module.css";

interface User {
  confirmPassword: string;
  name: string;
  password: string;
}

export const HookFormTabPanel: FC = () => {
  const { control, formState, getValues, handleSubmit } = useForm<User>({});

  return (
    <div className={classes.wrapper}>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <InputField
          name="name"
          control={control}
          label="User name"
          defaultValue={""}
          required
          rules={{ required: "Required" }}
        />
        <InputField
          name="password"
          control={control}
          label="Password"
          defaultValue={""}
          type="password"
          rules={{ required: "Required" }}
          disableClear
        />
        <InputField
          name="confirmPassword"
          control={control}
          label="Confirm password"
          defaultValue={""}
          type="password"
          rules={{
            required: "Required",
            validate: {
              confirmPassword: (value) => {
                if (getValues("password") !== value) {
                  return "Passwords do not match";
                }
              },
            },
          }}
          disableClear
        />
        <BqButton type="submit">Register</BqButton>
      </form>
      <FormStateDisplay
        formState={formState}
        getValues={getValues}
        control={control}
      />
    </div>
  );
};
