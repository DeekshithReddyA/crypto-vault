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
    addOnClick: any
}


export const SidebarAccount = ({ name , dropDownOnClick, dropDown, accounts, addOnClick }: SidebarAccountType) => {
    return (
        <div>
            <div className="hover:cursor-pointer space-y-2" onClick={dropDownOnClick}>
                <div className="flex">
                    <div>
                        {name}
                    </div>
                    {
                        dropDown ? <div> &darr; </div> :
                            <div>
                                &rarr;
                            </div>
                    }
                </div>
                <div className="flex flex-col">
                    {dropDown &&
                        accounts.map((account) => (
                            <div className="">
                                {account.name}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="" onClick={addOnClick}>
                Add account
            </div>
        </div>
    )
}