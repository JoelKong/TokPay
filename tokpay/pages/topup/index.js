import TopupLayout from "../../components/topupLayout/topupLayout";
import { getSession } from "next-auth/react";

function Topup({ session }) {
  return <TopupLayout session={session} />;
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

export default Topup;
