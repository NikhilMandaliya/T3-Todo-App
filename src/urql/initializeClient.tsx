// urql/initializeClient.tsx
import { cacheExchange, type Client, createClient, fetchExchange, ssrExchange, type SSRData } from "urql";
import { authExchange } from "@urql/exchange-auth";
import { env } from "../env.mjs";

let urqlClient: Client | null = null;

let ssrCache: ReturnType<typeof ssrExchange> | null = null;

const isServer = typeof window === "undefined";

/*
 * Function to initialize urql client. can be used both on client and server
 * @param initialState -  usually the data from the server returned as props
 * @param getToken -  function to get the token from clerk (from useAuth)
 * @returns and object with urqlClient and ssrCache
 */
export function initUrqlClient(initialState?: SSRData) {
  if (!urqlClient) {
    //fill the client with initial state from the server.
    ssrCache = ssrExchange({ initialState, isClient: !isServer });

    urqlClient = createClient({
      url: env.NEXT_PUBLIC_HASURA_GRAPHQL_API, // replace with your Hasura GraphQL API endpoint
      exchanges: [
        cacheExchange,
        ssrCache, // Add `ssr` in front of the `fetchExchange`
        // eslint-disable-next-line @typescript-eslint/require-await
        authExchange(async (utils) => {
          // take token form local storage or redux store
          // const token = localStorage.getItem("token");
          // const token = "changethis";
          return {
            addAuthToOperation: (operation) => {
              if (!operation) return operation;
              return utils.appendHeaders(operation, {
                // Authorization: token ? `Bearer ${token}` : ""
                "x-hasura-admin-secret": env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET
              });
            },

            willAuthError: (_operation) => {
              // console.log("willautherror", {_operation});
              return false; // todo: check if token is expired
            },
            didAuthError: (_error, _operation) => {
              // console.log("didautherror", {_error, _operation});
              return true;
            },
            /* eslint:disable:no-empty-function */
            refreshAuth: async (): Promise<void> => {
              // token = await getToken({ template: "hasura" });
              // console.log("refreshAuth", token);
            }
          };
        }),
        fetchExchange
      ]
    });
  } else {
    //when navigating to another page, client is already initialized.
    //lets restore that page's initial state
    ssrCache?.restoreData(initialState || {});
  }

  // Return both the Client instance and the ssrCache.
  return { urqlClient, ssrCache };
}

export const initCronUrqlClient = () => {
  return createClient({
    url: env.NEXT_PUBLIC_HASURA_GRAPHQL_API,
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: {
      headers: {
        "x-hasura-admin-secret": env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET
      }
    }
  });
};
