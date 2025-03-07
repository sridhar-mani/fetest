import { collectableDat, headercolumnWidths, sampleTabDat } from "../../data";
import { timeArToString } from "../../utils";
import TableShow from "./TableShow"

const SmallInfoDiv=({dat})=>{
let filteredDat = dat.data
  .map((each, ind) =>
    ind === 0 ? { type: "string", value: each.value[1] } : each
  )
  .slice(0, dat.data.length - 1);

filteredDat[filteredDat.length - 1].value = filteredDat[filteredDat.length - 1].value.split(', ')[0];
filteredDat[3].value = filteredDat[3].value.includes(':')
  ? filteredDat[3].value.split(':')
  : filteredDat[3].value;
filteredDat[3].value = Array.isArray(filteredDat[3].value)
  ? timeArToString(filteredDat[3].value)
  : filteredDat[3].value;

const fourthIndex = 3;
const fifthIndex = 4;


const temp = filteredDat[fourthIndex];
filteredDat[fourthIndex] = filteredDat[fifthIndex];
filteredDat[fifthIndex] = temp;

filteredDat = [{ data: [...filteredDat] }];

    
return(
    <div className="bg-white px-10 py-1  rounded-2xl" style={{color:'gray'}}>
        <TableShow tData={filteredDat} headers={collectableDat} widths={headercolumnWidths}></TableShow>
    </div>
)
}

export default SmallInfoDiv