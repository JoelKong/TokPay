import SideBar from "../sidebar/sidebar";
import classes from "./paymentLayout.module.css"
import Pay from "../payment/pay.jsx"

function PaymentLayout() {
    return (
        <div className = {classes.body}>
            <SideBar/>
            <Pay/>
        </div>
    )
}
export default PaymentLayout