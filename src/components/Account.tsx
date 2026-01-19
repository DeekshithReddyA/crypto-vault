import { useEffect, useState } from "react";
import { CopyIcon, EyeIcon, EyeOffIcon, PenIcon, TickIcon } from "./icons/Icons";

interface AccountType{
    selectedAccount : {
        name : string,
        publicKey : string,
        privateKey : string,
        path : string
    }
}

export const Account = ({selectedAccount} : AccountType) => {
    const [isHidden, setIsHidden] = useState<boolean>(true);
    const [isPublicCopied , setIsPublicCopied] = useState<boolean>(false);
    const [isPrivateCopied , setIsPrivateCopied] = useState<boolean>(false);
    const [isCopied, setIsCopied] = useState<boolean>(false);
    // const [isRenaming , setIsRenaming] = useState<boolean>(false);
    // const [value, setValue] = useState<string>("");


    // useEffect(()=>{
    //     setValue(name)
    // },[])

    // Show message if no account is selected
    if (!selectedAccount.publicKey) {
        return (
            <div className="w-full h-full flex justify-center items-center">
                <div className="text-center">
                    <div className="text-2xl font-semibold text-neutral-300 mb-2">
                        No Account Selected
                    </div>
                    <div className="text-neutral-500">
                        Create or open an account from the sidebar to get started
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-1/2">
            {/* {isRenaming ? 
            <div className="flex items-center gap-4">

            <input type="text" value={value} 
                onChange={(e)=>{
                    const { value } = e.target;
                    setValue(value);
                }}
            className="p-2 rounded-2xl outline-none border-2 border-white focus:border-green-600 focus:border-2" onKeyDown={(e) =>{
                if(e.key === "Enter"){
                    setValue(value);
                    setIsRenaming(false);
                }
            }}>
            </input>
            <div className="p-1.5 px-2 text-red-900 hover:bg-neutral-500/20 rounded-lg" onClick={()=>{
                setIsRenaming(false);
            }
            }>
            X
            </div>
            </div>
            :
                <div className="m-2 flex gap-2 items-center group">
                    <div className="font-bold text-3xl text-neutral-200 tracking-wide">
                        Account
                    </div>
                    <div className="p-1.5 hover:cursor-pointer group-hover:opacity-100 opacity-0 transition-all duration-150 text-neutral-400 hover:bg-neutral-500/20 rounded-xl"
                        onClick={()=>{
                            setIsRenaming(true);
                        }}>
                        <PenIcon size="16"/>
                    </div>
                </div>
            } */}
            <div className="font-bold text-3xl text-neutral-200 tracking-wide">
                {selectedAccount.name}
            </div>
                {/* <div>
                    {selectedAccount.publicKey}
                </div>
                <div>
                    Derivation m/44'/1'/0
                </div> */}
{/* 
                <div className="m-2 p-5 bg-gray-800 rounded-xl">
                    <div className="text-xl font-semibold text-neutral-400 tracking-wide">
                        Total Balance
                    </div>
                    <div className="flex space-x-2">
                        <div>
                            Send
                        </div>
                        <div>
                            Receive
                        </div>
                    </div>
                </div> */}

                <div className="p-5 bg-gray-800 rounded-xl">
                    <div className="text-lg font-semibold tracking-tight m-1">
                        Wallet Keys
                    </div>
                    <div className="m-3">
                        <div className="flex justify-between items-center">
                            <div className="text-neutral-400">
                                Public Key (Address)
                            </div>
                            {isPublicCopied ? <div className="text-green-600 p-2 hover:bg-neutral-500/20 rounded-lg">
                                <TickIcon size="16" />
                            </div> :
                                <div className="hover:cursor-pointer p-2 hover:bg-neutral-500/20 rounded-lg" onClick={()=>{
                                    navigator.clipboard.writeText("publicKey is copied");
                                    setIsPublicCopied(true);

                                    setTimeout(()=>{
                                        setIsPublicCopied(false);

                                    },3000);
                                }}> 
                                    <CopyIcon size="16" />
                            </div>
                            }
                        </div>
                        <div className="bg-black/50 p-2 rounded-lg text-sm">
                            {selectedAccount.publicKey}
                        </div>


                        <div className="flex justify-between items-center mt-5">
                            <div className="text-neutral-400">
                                Private Key (Secret)
                            </div>
                            <div className="flex">
                            {
                                isHidden ? 
                                <div className="hover:cursor-pointer p-2 hover:bg-neutral-500/20 rounded-lg"
                                    onClick={()=>{
                                        setIsHidden(false);
                                    }}>
                                    <EyeIcon size="18" />
                                </div> : 
                                <div className="hover:cursor-pointer p-2 hover:bg-neutral-500/20 rounded-lg"
                                    onClick={()=>{
                                        setIsHidden(true);
                                    }}>
                                    <EyeOffIcon size="18" />
                                </div>
                            }
                            {isPrivateCopied ? <div className="text-green-600 p-2 hover:bg-neutral-500/20 rounded-lg">
                                <TickIcon size="16" />
                            </div> :
                                <div className="hover:cursor-pointer p-2 hover:bg-neutral-500/20 rounded-lg" onClick={()=>{
                                    navigator.clipboard.writeText("publicKey is copied");
                                    setIsPrivateCopied(true);

                                    setTimeout(()=>{
                                        setIsPrivateCopied(false);

                                    },3000);
                                }}> 
                                    <CopyIcon size="16" />
                            </div>
                            }
                            </div>
                        </div>
                        <div className="bg-black/50 p-2 rounded-lg text-sm break-all">
                            <div className={`${isHidden ? "blur-xs" : ""}`}>
                                {selectedAccount.privateKey}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}