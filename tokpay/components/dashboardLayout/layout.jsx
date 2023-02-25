import SideBar from "../sidebar/sidebar"
import classes from "./layout.module.css"

function Layout({children}){
    return (
        <div className ="layout">
            <SideBar/>
            <div className = "content">{children}</div>
        </div>
    )
}

export default Layout