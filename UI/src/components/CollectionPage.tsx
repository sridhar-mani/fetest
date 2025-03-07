import { useNavigate, useParams } from "react-router-dom"
import NavBar from "./subCom/NavBar";
import { sampleTabDat } from "../data";
import { ChevronRight } from "lucide-react";
import SmallInfoDiv from "./subCom/SmallInfoDiv";
import TableShow from "./subCom/TableShow";
import { timeArToString } from "../utils";

const CollectionPage=()=>{

    const {id} = useParams();
    const navigate = useNavigate()

    const handleClick=()=>{navigate('/')}

    const original = sampleTabDat[Number(id) - 1];
    const dat = {
      ...original,
      data: original.data.map((item) => ({ ...item }))
    };
    return (
        <div className="bg-gray-100 flex flex-col w-full h-full">
            <div className="text-left flex py-1 px-4">
                <span onClick={handleClick} className="text-gray-500 font-semibold flex items-center">Overview <ChevronRight size={16}></ChevronRight></span>
                {dat.data[0].value[0]}
            </div>
            <NavBar>
                {dat.data[0].value[0]}
            </NavBar>
            <div className="p-4 rounded-md bg-gray-100 h-11/12">
                <SmallInfoDiv dat={dat}></SmallInfoDiv>
                
            </div>
        </div>
    )
}

export default CollectionPage