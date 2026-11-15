import { StatisticsItem } from "./StatisticsItem";
export function StatisticsList({statistics}) {
    
  return (
    <ul>
        {statistics.map((item) => {
                return <StatisticsItem key={item.id} {...item} />;
              })}
    </ul>
  );
}
