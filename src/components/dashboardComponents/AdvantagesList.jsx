import { AdvantagesItem } from "./AdvantagesItem";
export function AdvantagesList({ advantages }) {
  return (
    <ul>
      {advantages.map((item) => {
        return <AdvantagesItem key={item.id} {...item} />;
      })}
    </ul>
  );
}