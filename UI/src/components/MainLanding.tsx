import { createContext, useEffect, useState } from "react";
import {landingcolumnWidths, landingtableDat} from "../data"
import NavBar from "./subCom/NavBar"
import SearchBar from "./subCom/SearchBar"
import TableShow from "./subCom/TableShow"
import { getCollections, TableRow } from "../services/apiService";


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
    const [collections, setCollections] = useState<TableRow[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getCollections();
            setCollections(data);
            console.log(data);
          } catch (error) {
            console.error("Error fetching collections:", error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);

    
    return (
        <FilterCont.Provider value={{filter,setFilter,search,setSearch}}>
        <div className="bg-gray-100 flex flex-col w-full h-full">
            <NavBar>Overview</NavBar>
            <div className="p-4 rounded-md bg-gray-100 h-11/12">
            <div className="h-full w-full bg-white rounded-2xl">
                <SearchBar></SearchBar>
                <TableShow tData={collections} headers={landingtableDat} widths={landingcolumnWidths}></TableShow>
                </div>
            </div>
        </div>
        </FilterCont.Provider>
    )
}

export default MainLanding