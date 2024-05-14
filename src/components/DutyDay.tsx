
type Props = {
    day : string | undefined
}


function DutyDay({ day } : Props ) {
  return (
    <div>

        { 
            day != undefined ? <p>Duty Day on day# { day }</p> : <p>Check day</p>
        }
        
      
    </div>
  )
}

export default DutyDay
