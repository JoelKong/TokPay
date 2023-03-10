import dynamic from "next/dynamic";
import { Fragment } from "react";
const DynamicDescription = dynamic(
  () => import("../components/description/description"),
  {
    loading: () => <p>Loading...</p>,
  }
);
import Introduction from "../components/introduction/intro";
import { samplePieData } from "../utils/charts/sampleChart";

function Landing() {
  return (
    <Fragment>
      <Introduction />
      <DynamicDescription samplePieData={samplePieData} />
    </Fragment>
  );
}

export default Landing;
