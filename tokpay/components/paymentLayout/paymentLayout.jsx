import SideBar from "../sidebar/sidebar";
import classes from "./paymentLayout.module.css"

function PaymentLayout() {

    return (
        <div className = {classes.body}>
            <SideBar/>
        </div>
    )
}
export default PaymentLayout