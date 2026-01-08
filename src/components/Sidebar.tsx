import { useState } from "react";
import { WalletIcon } from "./icons/Wallet";
import { SidebarAccount } from "./SidebarAccount";

interface SidebarType {
    accounts : {
        "SOL" : {
            path : string,
            name : string,
            publicKey: string,
            privateKey: string
        }[],
        "ETH" : {
            path : string,
            name : string,
            publicKey: string,
            privateKey: string
        }[]
    },
    generateSolanaWallet : any,
    generateEthereumWallet : any
}

export const Sidebar = ({accounts, generateSolanaWallet, generateEthereumWallet} : SidebarType ) =>{
    const [solDropDown , setSolDropDown] = useState<boolean>(true);
    const [ethDropDown, setEthDropDown] = useState<boolean>(true);

    return(
        <div className="">
            <div>
                <div className="flex">
                    <WalletIcon size="24" />
                    <div>

                    <div>
                        CryptoVault
                    </div>
                    <div > 
                        HD Wallet
                    </div>
                </div>
                </div>
            </div>
            <div className="">
                Line
            </div>
           {/* Wallets */}
            <div>
                <div className="flex">
                    <div>Wallets</div>
                    <div>2</div>
                </div>
                <SidebarAccount name="Solana" dropDownOnClick={()=>{setSolDropDown((val)=>!val)}} dropDown={solDropDown} accounts={accounts.SOL} addOnClick={()=>generateSolanaWallet()}/>
                <SidebarAccount name="Ethereum" dropDownOnClick={()=>{setEthDropDown((val)=>!val)}} dropDown={ethDropDown} accounts={accounts.ETH} addOnClick={()=>generateEthereumWallet()}/>
            </div>
        </div>
    );
}