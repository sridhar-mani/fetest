import {sampleTabDat} from "../data"
import NavBar from "./subCom/NavBar"
import SearchBar from "./subCom/SearchBar"
import TableShow from "./subCom/TableShow"

const MainLanding = ()=>{
    return (
        <div className="bg-gray-100 flex flex-col w-full h-full">
            <NavBar></NavBar>
            <div className="m-4 rounded-md bg-gray-100 h-11/12">
                <SearchBar></SearchBar>
                <TableShow tData={sampleTabDat}></TableShow>
            </div>
        </div>
    )
}

export default MainLanding