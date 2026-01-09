import type { ReactElement } from "react"

interface SidebarAccountType {
    name : string,
    dropDownOnClick: any,
    dropDown: boolean,
    accounts: {
            path: string,
            name: string,
            publicKey: string,
            privateKey: string
    }[],
    addOnClick: any,
    Logo : ReactElement
}


export const SidebarAccount = ({ name , dropDownOnClick, dropDown, accounts, addOnClick, Logo }: SidebarAccountType) => {
    return (
        <div className="my-2">
           <div className="hover:cursor-pointer space-y-2" onClick={dropDownOnClick}>
                <div className="p-3 flex justify-between bg-zinc-900/50 hover:bg-zinc-900 rounded-xl">
                    <div className="flex gap-2">
                        <div className="text-white">
                            {Logo}
                        </div>
                        <div>
                            {name}
                        </div>
                    </div>
                    {
                        dropDown ? <div> &darr; </div> :
                            <div>
                                &rarr;
                            </div>
                    }
                </div>
                    {dropDown &&(
                        <div className="flex flex-col">
                        {accounts.map((account) => (
                            <div className="">
                                {account.name}
                            </div>
                        ))}
                        <div className="" onClick={addOnClick}>
                            Add account
                        </div>
                     </div>
                    )}
            </div>
        </div>
    )
}