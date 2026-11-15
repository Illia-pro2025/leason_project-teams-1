import { DashboardPage } from "./components/DashboardPage";
import statistics from "./statistics.json"
import advantages from "./advantages.json"


function App() {
  return (
   <>
   <DashboardPage statistics={statistics} advantages={advantages}/>
   </>
  );
}

export default App;
