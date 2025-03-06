import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react"
import { selectFilterdat } from "../../data";
import CheckBox from "./CheckBox";

const SelectOpt=()=>{
    const [isOpen,setIsOpen] = useState(false);
    const [selected,setSelected] =  useState<string[]>([]);
    
return (
    <div className="relative inline-block">
        <button className="h-8 !bg-gray-300 text-black flex items-center gap-1 w-24 !p-0 !m-0 justify-center" onClick={()=>setIsOpen(!isOpen)}>
            Type
            {isOpen?<ChevronDown size={18}></ChevronDown>:<ChevronUp size={18}></ChevronUp>}
        </button>
        {!isOpen && <div className="absolute z-10 left-0 rounded-lg w-36 p-3 h-fit bg-white border-gray-400 border-[1px]">
{
    selectFilterdat.map((each)=>(
        <CheckBox label={each} selectedAr={selected} setSelectedAr={setSelected}></CheckBox>
    ))
}
        </div>}
    </div>
)
}

export default SelectOpt