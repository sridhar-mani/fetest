import { Eye } from "lucide-react"
import { Link } from "react-router-dom"

const CusButton=({url="",label})=>{
return(
   <Link to={url}>
<button
    class="cursor-pointer bg-white relative inline-flex items-center justify-center gap-1 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#025992] h-10  rounded-md !p-0 !px-2 active:border-[#025992] "
  >
<Eye size={18} />
    {label}
  </button>
  </Link>

)
}

export default CusButton