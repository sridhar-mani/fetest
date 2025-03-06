import SearchBarSub from "./SearchBarsub"
import SelectOpt from "./SelectOpt"

const SearchBar=()=>{
    return (
<div className="w-full h-1/12 gap-2 rounded-t-lg bg-white flex items-center p-3">
<SearchBarSub></SearchBarSub>
<SelectOpt></SelectOpt>
</div>
    )
}

export default SearchBar