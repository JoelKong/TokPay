import Image from "next/image";
import classes from "./intro.module.css";

function Introduction() {
  return (
    <div className={classes.flexcontainer}>
      <div className={classes.logo}>
        <Image
          src="/images/TokPayPNGTransparent.png"
          alt="TokPay Logo"
          width={360}
          height={360}
        />
      </div>
    </div>
  );
}

export default Introduction;
