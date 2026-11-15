import { NavigationItem } from "./Navigation/NavigationItem";
import { MdAssignment } from "react-icons/md";
export function Assignments(){
    return <NavigationItem icon={<MdAssignment/>} title="Assignments" />;
}