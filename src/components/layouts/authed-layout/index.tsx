import { useEffect, type ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const AuthedLayout = ({ children }: { children: ReactNode }) => {
  const session = useSession();
  const { push } = useRouter();

  useEffect(() => {
    if (!session.data?.user) {
      push("/sign-in").catch((e) => console.log(e));
    }
  }, [session, push]);

  if (!session.data?.user) {
    return <></>;
  } else {
    return (
      <>
        <Header /> <Sidebar />
        {children}
      </>
    );
  }
};

export default AuthedLayout;
