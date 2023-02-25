import { getSession } from "next-auth/react";
import DashboardLayout from "../../components/dashboardLayout/dashboardLayout";

function DashBoard() {
  return (
    <main>
      <div>
        <DashboardLayout />
      </div>
    </main>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return { redirect: { destination: "/", permanent: false } };
  }

  return {
    props: { session },
  };
}

export default DashBoard;
