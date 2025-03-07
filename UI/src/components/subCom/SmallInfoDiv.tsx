import { sampleTabDat } from "../../data";
import { timeArToString } from "../../utils";
import TableShow from "./TableShow"

const SmallInfoDiv=({dat})=>{

        let filteredDat = dat.data.map((each,ind)=>ind===0? {type:"string",value:each.value[1]}:each).slice(0,dat.data.length-1)
        console.log(filteredDat[filteredDat.length-1])
        filteredDat[filteredDat.length-1].value = filteredDat[filteredDat.length-1].value.split(', ')[0]
        filteredDat[3].value = filteredDat[3].value.includes(":")?filteredDat[3].value.split(':'):filteredDat[3].value
        filteredDat[3].value=filteredDat[3].value.includes(":")?timeArToString(filteredDat[3].value):filteredDat[3].value
        filteredDat=[{data:[...filteredDat]}]
    
        console.log(filteredDat)
return(
    <div >
        <TableShow tcusstyles={'rounded-xl'} dcusstyles={'rounded-xl'} tData={filteredDat}></TableShow>
    </div>
)
}

export default SmallInfoDiv