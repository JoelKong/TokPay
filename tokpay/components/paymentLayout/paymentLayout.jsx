import SideBar from "../sidebar/sidebar";
import classes from "./paymentLayout.module.css";
import Pay from "../payment/pay.jsx";

function PaymentLayout({ session }) {
  return (
    <div className={classes.body}>
      <SideBar />
      <Pay session={session} />
    </div>
  );
}
export default PaymentLayout;
