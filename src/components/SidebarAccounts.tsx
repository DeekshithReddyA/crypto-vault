interface SidebarAccountType{
    name : string,
    index : Number,
    isSelected : boolean,
    onClick : any
}
export const SidebarAccount = ({name, index,isSelected, onClick}: SidebarAccountType) => {
  return (
    <div className={`p-2.5 hover:bg-zinc-900/80 ${isSelected ? "bg-zinc-900 text-zinc-100" : "text-zinc-400"} rounded-xl flex justify-start gap-3 items-center transition-all cursor-pointer`}
        onClick={onClick}>
        <div className={`w-6 h-6 flex justify-center items-center text-xs font-medium rounded-lg ${isSelected ? "bg-indigo-500/20 text-indigo-400" : "bg-zinc-800 text-zinc-500"}`}>   
            {index.toString()}
        </div>
        <div className="font-medium text-sm">
            {name}
        </div>
    </div>)
  ;
};
