import PublicLayout from "~/components/layouts/public-layout";
import type { NextPageWithLayout } from "../_app";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/shadcn/ui/card";

const SignInPage: NextPageWithLayout = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Signin Form</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Click here to sign in</p>
      </CardContent>
    </Card>
  );
};

export default SignInPage;

SignInPage.getLayout = (page) => {
  return <PublicLayout>{page}</PublicLayout>;
};
