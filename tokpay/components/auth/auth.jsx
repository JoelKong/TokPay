import classes from "./auth.module.css";
import { signIn } from "next-auth/react";

function Authentication() {
  return (
    <button className={classes.container} onClick={() => signIn("google")}>
      <div className={classes.googleContainer}>
        <img
          className={classes.googleIcon}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
        />
      </div>
      <p className={classes.signIn}>Sign in with Google</p>
    </button>
  );
}

export default Authentication;
