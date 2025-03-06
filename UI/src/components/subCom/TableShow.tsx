import { landingcolumnWidths, landingtableDat } from "../../data"
import CusButton from "./CusButon";

interface TableItem {
    type: "text" | "multistring" | "button";
    value: string | string[];
}

interface TableShowProps {
    tData: TableItem[][];
}

const TableShow: React.FC<TableShowProps> = ({ tData }) => {
    return (
        <div className="w-full h-11/12 text-black font-sans rounded-b-lg bg-white overflow-auto max-h-11/12 custom-scrollbar">
            <table className="w-full border-b border-gray-300 font-sans">
                <thead className="bg-white !border-b z-10 !border-gray-300 sticky top-0">
                    <tr>
                        {landingtableDat.map((each: string, index: number) => (
                            <th key={index} className="p-2 border-b border-gray-300 text-left" style={{ width: landingcolumnWidths[index] }}>
                                {each}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tData.map((eachRow, rowIndex) => (
                        <tr key={rowIndex} className="border-b text-sm text-left border-gray-300">
                            {eachRow.map((dat, colIndex) => (
                                <td key={colIndex} className="p-2 " style={{ width: landingcolumnWidths[colIndex] }}>
                                    {dat.type === "multistring" && Array.isArray(dat.value) ? (
                                        <div className="flex flex-col">
                                            <span className="font-normal">{dat.value[0]}</span>
                                            <span className="text-gray-500 text-sm">{dat.value[1]}</span>
                                        </div>
                                    ) : dat.type === "button" ? (
                                        // <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                                        //     {dat.value}
                                        // </button>
                                        <CusButton label={dat.value}>
                                            
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
