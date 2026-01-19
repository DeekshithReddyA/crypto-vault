import type { ReactElement } from "react"
import { SidebarAccount } from "./SidebarAccounts"
import { PlusIcon } from "./icons/Icons"

interface SidebarCoinType {
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
    selectedAccount : {},
    setSelectedAccount : any
}


export const SidebarCoin = ({name , dropDownOnClick, dropDown, accounts, addOnClick, Logo , selectedAccount, setSelectedAccount}: SidebarCoinType) => {
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
            </div>
                    {dropDown &&(
                        <div className="flex flex-col">
                        {accounts.map((account, index) => (
                            <div className="my-2 ml-4" key={index}>
                                <SidebarAccount 
                                    name={account.name} 
                                    index={index + 1} 
                                    isSelected={selectedAccount === account} 
                                    onClick={() => {
                                        setSelectedAccount(account);
                                    }}
                                />
                            </div>
                        ))}
                        <div className="flex items-center gap-2 p-2 rounded-xl text-zinc-500 mx-4 my-1 hover:bg-zinc-900 hover:text-zinc-300 transition-colors cursor-pointer" onClick={addOnClick}>
                            <div>
                                <PlusIcon size="14" />
                            </div>
                            <div className="text-xs font-medium">
                                {`Add ${name} Account`}
                            </div>
                        </div>
                     </div>
                    )}
        </div>
    )
}