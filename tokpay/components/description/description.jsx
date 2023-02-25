import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";
import classes from "./description.module.css";

function Description({ samplePieData }) {
  const [isComponentMounted, setIsComponentMounted] = useState(false);

  ChartJS.register(ArcElement, Tooltip, Legend);

  useEffect(() => {
    setIsComponentMounted(true);
  }, []);

  if (!isComponentMounted) {
    return null;
  } else {
    return (
      <section className={classes.section}>
        <div className={classes.chart}>
          <Pie data={samplePieData} width={100} height={100} />
        </div>
        <article className={classes.article}>
          <div>
            <h2 className={classes.title}>Why TokPay?</h2>
            <p className={classes.body}>
              Visualise your spendings and transact money easily through TokPay.
              Keeping track of your spendings would never again be a hassle when
              you sign up with us.
            </p>
          </div>
        </article>
      </section>
    );
  }
}

export default Description;
