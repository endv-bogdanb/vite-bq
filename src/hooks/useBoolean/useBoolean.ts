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

  return [value, { off, on, toggle }] as const;
}
