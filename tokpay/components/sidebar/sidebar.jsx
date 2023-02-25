import classes from "./sidebar.module.css"

function SideBar() {
    return (
        <div className = {classes.sidebar}>
            <ul className= {classes.ul}>
                <li>
                    <a>Pay</a>
                </li>
                <li>
                    <a>Top-up</a>
                </li>
            </ul>
        </div>
    )
}

export default SideBar