export function StatisticsItem({title,progress}) {
  return (
    
      <li>
        <h4>
         {title} :<span>{progress}%</span>
        </h4>
      </li>
     
  );
}
