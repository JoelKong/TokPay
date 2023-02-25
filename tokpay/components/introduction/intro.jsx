import Image from "next/image";
import classes from "./intro.module.css";

const myLoader = ({ src, width, quality }) => {
  return;
};
function Introduction() {
  return (
    <div className={classes.flexcontainer}>
      <div className={classes.logo}>
        <Image
          src="/images/TokPayPNGTransparent.png"
          alt="TokPay Logo"
          width={200}
          height={189}
        />
      </div>
      <p className={classes.slogan}>Hassle-free transactions starts with us</p>
    </div>
  );
}

export default Introduction;
