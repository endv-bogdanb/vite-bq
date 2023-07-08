import { useCallback, useState } from "react";

export function useBoolean(defaultValue = false) {
  const [value, setValue] = useState(defaultValue);

  const on = useCallback(() => {
    setValue(true);
  }, [setValue]);

  const off = useCallback(() => {
    setValue(false);
  }, [setValue]);

  const toggle = useCallback(() => {
    setValue((draft) => !draft);
  }, [setValue]);

  const set = useCallback(
    (value: boolean) => {
      setValue(value);
    },
    [setValue],
  );

  return [value, { off, on, set, toggle }] as const;
}
