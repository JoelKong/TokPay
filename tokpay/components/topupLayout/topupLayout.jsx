import SideBar from "../sidebar/sidebar";
import classes from "./topupLayout.module.css"

function TopupLayout() {
    return (
        <div className = {classes.body}>
            <SideBar/>
        </div>
    )
}

export default TopupLayout