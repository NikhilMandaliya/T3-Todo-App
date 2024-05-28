import type { NextPageWithLayout } from "../_app";
import AuthedLayout from "~/components/layouts/authed-layout";

const DashboardPage: NextPageWithLayout = () => {
  return <div>Dashboard page</div>;
};

export default DashboardPage;

DashboardPage.getLayout = (page) => {
  return <AuthedLayout>{page}</AuthedLayout>;
};
