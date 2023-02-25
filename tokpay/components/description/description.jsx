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
      <section className={classes.bookkeeping}>
        <div className={classes.chart}>
          <Pie data={samplePieData} width={100} height={100} />
        </div>
        <article className={classes.bookkeepingarticle}>
          <div>
            <h2 className={classes.bookkeepingtitle}>Why TokPay?</h2>
            <p className={classes.bookkeepingbody}></p>
          </div>
        </article>
      </section>
    );
  }
}

export default Description;
