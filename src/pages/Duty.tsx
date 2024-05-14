import { useParams } from "react-router-dom"
import DutyDay from "../components/DutyDay";

function Duty() {

    const { day } = useParams();



  return (
    <div>
        <DutyDay day={ day } />
    </div>
  )
}

export default Duty
