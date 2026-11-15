import { NavigationItem } from "./Navigation/NavigationItem";
import { MdHome } from "react-icons/md";
export function Home() {
  return <NavigationItem icon={<MdHome/>} title="Home" />;
}
