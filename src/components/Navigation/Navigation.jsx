import { Home } from "../Home";
import { MyCourses } from "../MyCourses";
import { Assignments } from "../Assignments";
import { TimeTable } from "../TimeTable";
import { Forum } from "../Forum";
import { Settings } from "../Settings";

export default function Navigation({icon}){
  return (
    <nav>
      <>
        <h2>OXFORD</h2>
        <button type="button">{icon}</button>
      </>

      <div>
        <span><img src="" alt="man" /></span>
        <div>
          <p>Hi, Alex</p>
          <p>E173037</p>
        </div>
      </div>

      <div>
        <Home />
        <MyCourses />
        <Assignments />
        <TimeTable />
        <Forum />
        <Settings />
      </div>
    </nav>
  );
};
