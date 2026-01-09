interface SidebarAccountType{
    name : string,
    index : Number
}
export const SidebarAccount = ({name, index}: SidebarAccountType) => {
  return (
    <div className={`p-2 hover:bg-zinc-900 rounded-xl flex justify-start gap-4 items-center`}>
        <div className="px-3 py-1 bg-green-700 rounded-xl">   
            {index.toString()}
        </div>
        <div className="font-semibold">
            {name}
        </div>
    </div>)
  ;
};
