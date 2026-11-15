import { StatisticsList } from "./dashboardComponents/StatisticsList";
import { AdvantagesList } from "./dashboardComponents/AdvantagesList";
export function DashboardPage({ statistics ,advantages}) {
  return (
    <>
      <h2>Dashboard</h2>
      <h3>Welcome Back, Alex</h3>
      <StatisticsList statistics={statistics} />
      <AdvantagesList advantages={advantages} />
    </>
  );
}
