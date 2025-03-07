import { useContext } from "react";
import CusButton from "./CusButon";
import { FilterCont } from "../MainLanding";

interface TableItem {
  type: "text" | "multistring" | "button";
  value: string | string[];
}

interface TableRow {
  id: string;       
  data: TableItem[];
}

interface TableShowProps {
    tData: TableRow[];
    headers:string[];
    widths:string[]
  }

const TableShow: React.FC<TableShowProps> = ({ tData,headers,widths }) => {

    const context = useContext(FilterCont);
    //@ts-ignore
    let filter;
    let search;
    console.log(context)
    if (context) {
        filter= context.filter;
        search = context.search;
    }else{
        filter=[]
        search=''
    }


    return (
        <div className={`w-full  text-black font-sans rounded-2xl bg-white overflow-auto max-h-11/12 custom-scrollbar`}>
            <table className="w-full 
             font-sans">
                <thead className="bg-white  z-10 sticky top-0 " >
                    <tr>
                        {headers.map((each: string, index: number) => (
                            <th key={index} className="p-2  text-left" style={{ width: widths[index] }}>
                                {each}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {tData.map((eachRow, rowIndex) => (
                        (filter.length>0 ? filter.includes(eachRow.data[1].value):true) && (search.length>0?eachRow.data[0].value[0].toLowerCase().includes(search.toLowerCase())||eachRow.data[0].value[1].toLowerCase().includes(search.toLowerCase()):true) && <tr key={rowIndex} className={` text-sm text-left  ${rowIndex===tData.length-1?"":"border-b border-gray-300"}`}>
                            {eachRow.data.map((dat, colIndex) => (
                                <td key={colIndex} className="p-2 " style={{ width: widths[colIndex] }}>
                                    {dat.type === "multistring" && Array.isArray(dat.value) ? (
                                        <div className="flex flex-col">
                                            <span className="font-normal">{dat.value[0]}</span>
                                            <span className="text-gray-500 text-sm">{dat.value[1]}</span>
                                        </div>
                                    ) : dat.type === "button" ? (
                                        <CusButton url={`/collection/${eachRow.id}`} label={dat.value}>
                                            
                                        </CusButton>
                                    ) : (
                                        dat.value
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableShow
