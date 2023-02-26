import SideBar from "../sidebar/sidebar";
import classes from "./dashboardLayout.module.css";
import Image from "next/image";

function DashboardLayout({ session }) {
  return (
    <main className={classes.body}>
      <SideBar />
      <div className={classes.dashboard}>
        <div className={classes.picture}>
          <Image
            src={session.session.user.image}
            alt="User Image"
            width={100}
            height={100}
          />
        </div>
        <p
          className={classes.name}
        >{`Welcome, ${session.session.user.name}`}</p>
        <p
          className={classes.amount}
        >{`Current Balance: $${session.session.user.currentBalance}`}</p>
      </div>
    </main>
  );
}

export default DashboardLayout;
