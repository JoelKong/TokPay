import { signOut } from "next-auth/react";
import classes from "./sidebar.module.css";

function SideBar() {
  return (
    <div className={classes.sidebar}>
      <ul className={classes.ul}>
        <li>
          <a className={classes.a} href="/dashboard">
            Details
          </a>
        </li>
        <li>
          <a className={classes.a} href="/payment">
            Pay
          </a>
        </li>
        <li>
          <a className={classes.a} href="/topup">
            Top-up
          </a>
        </li>
        <li>
          <a
            className={classes.a}
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Sign Out
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
