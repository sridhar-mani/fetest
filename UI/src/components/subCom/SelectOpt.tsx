import { ChevronDown, ChevronUp } from "lucide-react";
import { useContext, useState } from "react"
import { selectFilterdat } from "../../data";
import CheckBox from "./CheckBox";
import { FilterCont } from "../MainLanding";

const SelectOpt=()=>{
    const [isOpen,setIsOpen] = useState(false);
    const {filter,setFilter} = useContext(FilterCont)
    
return (
    <div  className="relative inline-block">
        <button className={`h-8 !bg-gray-300 text-black flex items-center gap-1 w-24 !p-0 !m-0 justify-center ${filter.length>0?"border-blue-600 text-blue-600 bg-blue-600/45":""}`} onClick={()=>setIsOpen(!isOpen)}>
            Type
            {!isOpen?<ChevronDown size={18}></ChevronDown>:<ChevronUp size={18}></ChevronUp>}
            {filter.length>0 && <div className="h-[10px] w-[10px] rounded-full text-[8px] absolute flex items-center justify-center bg-gray-50 top-1 right-3">{filter.length}</div>}
        </button>
        {isOpen && <div className="absolute z-20 left-0 rounded-lg w-36 p-3 h-fit bg-white border-gray-400 border-[1px]">
{
    selectFilterdat.map((each,ind)=>(
        <CheckBox key={ind+each} label={each} selectedAr={filter} setSelectedAr={setFilter}></CheckBox>
    ))
}
        </div>}
    </div>
)
}

export default SelectOpt