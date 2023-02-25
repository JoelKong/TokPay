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
    <main className="main">
      <Introduction />
      <DynamicDescription samplePieData={samplePieData} />
    </main>
  );
}

export default Landing;
