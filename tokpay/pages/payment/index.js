import PaymentLayout from "../../components/paymentLayout/paymentLayout";
import { getSession } from "next-auth/react";

function Payment() {
  return <PaymentLayout />;
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

export default Payment;
