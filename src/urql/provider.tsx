import React, { type ReactNode } from "react";
import { Provider } from "urql";
import { type PageProps, useClient } from "./useClient";

type Props = {
  children: ReactNode;
  pageProps: PageProps;
};

const UrqlProvider = ({ children, pageProps }: Props) => {
  const client = useClient(pageProps);
  return <Provider value={client}>{children}</Provider>;
};

export default UrqlProvider;
