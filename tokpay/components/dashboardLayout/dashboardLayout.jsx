import SideBar from "../sidebar/sidebar"
import classes from "./dashboardLayout.module.css"

function DashboardLayout({children}){
    return (
        <main className = {classes.body}>
            <SideBar/>
            <div className = "content">{children}</div>
        </main>
    )
}

export default DashboardLayout