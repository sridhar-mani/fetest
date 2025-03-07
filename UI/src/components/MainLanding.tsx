import { createContext, useState } from "react";
import {sampleTabDat} from "../data"
import NavBar from "./subCom/NavBar"
import SearchBar from "./subCom/SearchBar"
import TableShow from "./subCom/TableShow"


export interface FitlerCont {
    filter: string[];
    setFilter: React.Dispatch<React.SetStateAction<string[]>>;
    search:string;
    setSearch: React.Dispatch<React.SetStateAction<string[]>>;
  }

  

export const FilterCont = createContext<FitlerCont | undefined>(undefined);

const MainLanding = ()=>{

    const [filter, setFilter] = useState<string[]>([]);
    const [search,setSearch] = useState<string>("");

    
    return (
        <FilterCont.Provider value={{filter,setFilter,search,setSearch}}>
        <div className="bg-gray-100 flex flex-col w-full h-full">
            <NavBar>Overview</NavBar>
            <div className="p-4 rounded-md bg-gray-100 h-11/12">
                <SearchBar></SearchBar>
                <TableShow tData={sampleTabDat}></TableShow>
            </div>
        </div>
        </FilterCont.Provider>
    )
}

export default MainLanding