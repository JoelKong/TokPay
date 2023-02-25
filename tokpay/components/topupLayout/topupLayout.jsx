import SideBar from "../sidebar/sidebar";
import AddMoney from "../topup/addMoney";
import classes from "./topupLayout.module.css"

function TopupLayout() {
    return (
        <main className = {classes.body}>
            <SideBar/>
            <AddMoney/>
        </main>
    )
}

export default TopupLayout