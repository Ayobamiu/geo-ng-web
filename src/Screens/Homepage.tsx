import CodePlusListTab from "../Components/CodePlusListTab";
import Jumbotron from "../Components/Jumbotron";
import Navbar from "../Components/Navbar";
import { CallForContribution } from "../Components/CallForContribution";

export default function Homepage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Navbar />
      <Jumbotron />
      <CodePlusListTab />
      <CallForContribution />
    </div>
  );
}
