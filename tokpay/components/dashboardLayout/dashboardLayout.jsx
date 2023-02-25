import SideBar from "../sidebar/sidebar";
import classes from "./dashboardLayout.module.css";

function DashboardLayout({ session }) {
  return (
    <main className={classes.body}>
      <SideBar />
      <div className={classes.dashboard}>
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
