import dynamic from "next/dynamic";
const DynamicDescription = dynamic(
  () => import("../components/description/description"),
  {
    loading: () => <p>Loading...</p>,
  }
);
import Introduction from "../components/introduction/intro";
import { samplePieData } from "../utils/charts/samplechart";

function Landing() {
  return (
    <main>
      <Introduction />
      <DynamicDescription samplePieData={samplePieData} />
    </main>
  );
}

export default Landing;
