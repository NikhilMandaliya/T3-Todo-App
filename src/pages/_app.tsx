import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType, type AppProps } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import UrqlProvider from "~/urql/provider";
import { type ReactElement, type ReactNode } from "react";
import { type NextPage } from "next";
import { type SSRData } from "urql";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, wrapper } from "~/redux/store";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = {
  Component: NextPageWithLayout;
} & AppProps<{ session: Session; URQL_DATA: SSRData }>;

const MyApp: AppType<{ session: Session; URQL_DATA: SSRData }> = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SessionProvider session={pageProps.session}>
          <UrqlProvider pageProps={pageProps}>{getLayout(<Component {...pageProps} />)}</UrqlProvider>
        </SessionProvider>
      </PersistGate>
    </Provider>
  );
};

export default api.withTRPC(MyApp);
