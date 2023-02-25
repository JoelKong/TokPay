import { Fragment } from "react";
import dynamic from "next/dynamic";
import { samplePieData } from "../utils/charts/samplechart";
const DynamicDescription = dynamic(
  () => import("../components/description/description.jsx"),
  {
    loading: () => <p>Loading...</p>,
  }
);
import Introduction from "../components/introduction/intro";

function Landing() {
  return (
    <Fragment>
      <Introduction />
      <DynamicDescription samplePieData={samplePieData} />
    </Fragment>
  );
}

export default Landing;
