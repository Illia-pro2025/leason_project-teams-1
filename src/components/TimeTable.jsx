import { NavigationItem } from "./Navigation/NavigationItem";
import { GrSchedules } from "react-icons/gr"
export function TimeTable(){
    return <NavigationItem icon={<GrSchedules/>} title="TimeTable" />;
}