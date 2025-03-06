import { Eye } from "lucide-react"

const CusButton=({onclick=()=>{},label})=>{
return(
<button
   onClick={onclick} className="h-6 p-0 hover:bg-blue-700 gap-1 !border-0 !bg-white flex items-center"
>
<Eye size={18} />
{label}
</button>

)
}

export default CusButton