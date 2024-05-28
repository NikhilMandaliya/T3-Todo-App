// urql/useClient.tsx
import { useMemo } from "react";
import { initUrqlClient } from "./initializeClient";
import type { SSRData } from "urql";

export interface PageProps {
  URQL_DATA: SSRData;
}

/**
 * Simple hook to initialize the client with the pageProps.
 * @param pageProps - props of page
 * @returns urqlClient
 */
export const useClient = (pageProps?: PageProps) => {
  const urqlData = pageProps?.URQL_DATA;
  const { urqlClient } = useMemo(() => {
    return initUrqlClient(urqlData);
  }, [urqlData]);

  return urqlClient;
};
