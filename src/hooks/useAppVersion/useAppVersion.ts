import { useEffect, useState } from "react";

export function useAppVersion() {
  const [appVersion, setAppVersion] = useState("");

  useEffect(() => {
    const abortController = new AbortController();

    (async function (signal: AbortSignal) {
      const url = new URL("version.txt", window.location.href);
      fetch(url, { signal })
        .then((response) => {
          if (response.ok) {
            return response.text();
          }
          return "";
        })
        .then((version) => setAppVersion(version));
    })(abortController.signal);

    return () => {
      abortController.abort();
    };
  }, []);

  return appVersion;
}
