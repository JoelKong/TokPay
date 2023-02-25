import SideBar from "../sidebar/sidebar";
import AddMoney from "../topup/addMoney";
import classes from "./topupLayout.module.css";

function TopupLayout({ session }) {
  return (
    <main className={classes.body}>
      <SideBar />
      <AddMoney session={session} />
    </main>
  );
}

export default TopupLayout;
