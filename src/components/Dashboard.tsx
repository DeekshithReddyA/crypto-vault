import nacl from "tweetnacl";
import { mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import { Account } from "./Account"
import { Navbar } from "./Navbar"
import { Sidebar } from "./Sidebar"
import {  useEffect, useState } from "react";
import {ethers} from "ethers";
import bs58 from "bs58";


interface DashboardType{
    seedPhrase : string
    setIsInitialised : any,
    isInitialised: boolean
}

interface numAccountsType{
    SOL : number,
    ETH: number
}

interface AccountType {
    SOL : {
        path : string,
        name : string,
        publicKey: string,
        privateKey : string
    }[],
    ETH : {
        path : string,
        name : string,
        publicKey: string,
        privateKey : string
    }[]
}
export const Dashboard = ({seedPhrase, setIsInitialised, isInitialised} : DashboardType) =>{
    const [selectedAccount , setSelectedAccount] = useState({
        name : "",
        path : "",
        publicKey : "",
        privateKey : ""
    });

    const [numAccounts, setNumAccounts] = useState<numAccountsType>({
        "SOL" : 0,
        "ETH" : 0
    });
    const [accounts, setAccounts] = useState<AccountType>({
        "SOL" : [],
        "ETH" : []
    })
    useEffect(()=>{
        if(window.localStorage.getItem("accounts") !== null){

            const accountsLocal = JSON.parse(window.localStorage.getItem("accounts") || "[]");
            setAccounts(accountsLocal);
            setNumAccounts({
                "SOL" : accountsLocal.SOL.length,
                "ETH" : accountsLocal.ETH.length
            });
        }
    },[]);

 
    const generateSolanaWallet = () =>{

            const seed = mnemonicToSeedSync(seedPhrase);
            const path = `m/44'/501'/${numAccounts["SOL"]}'/0'`; // This is the derivation path
            const derivedSeed = derivePath(path, seed.toString("hex")).key;
            const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;

            const publicKey = Keypair.fromSecretKey(secret).publicKey.toBase58();
            const privateKey = bs58.encode(secret);
            
            setNumAccounts({
                "SOL" : numAccounts["SOL"] + 1,
                "ETH" : numAccounts["ETH"]
            });
            const newAccounts = {...accounts, 
                "SOL" : [...accounts.SOL, {
                    path,
                    name : `Account ${numAccounts.SOL}`,
                    privateKey,
                    publicKey
                }]
            }
            setAccounts(newAccounts);
            window.localStorage.setItem("accounts", JSON.stringify(newAccounts));
        }
        
        const generateEtheriumWallet = () =>{
            
            const seed = mnemonicToSeedSync(seedPhrase);
            const path = `m/44'/60'/${numAccounts["ETH"]}'/0'`;
            const node = ethers.HDNodeWallet.fromSeed(seed).derivePath(path);
            
            setNumAccounts({
                "SOL" : numAccounts["SOL"],
                "ETH" : numAccounts["ETH"] + 1
            });
            
            const newAccounts = {
            ...accounts,
            "ETH" : [...accounts.ETH,
                    {
                    path,
                    name : `Account ${numAccounts.ETH}`,
                    publicKey : node.publicKey,
                    privateKey : node.privateKey
                }
                ]
            }
            setAccounts(newAccounts);
            window.localStorage.setItem("accounts", JSON.stringify(newAccounts));
            
    }



    return(
        <div className="flex min-h-screen">
            
            <div className="w-1/6 bg-slate-950">
                <Sidebar accounts={accounts} generateSolanaWallet={generateSolanaWallet} generateEthereumWallet={generateEtheriumWallet} selectedAccount={selectedAccount} setSelectedAccount={setSelectedAccount}/>
            </div>
            <div className="flex-1 flex flex-col">
                <div className="bg-slate-950/90">
                    <Navbar seedPhrase={seedPhrase} setIsInitialised={setIsInitialised}/>
                </div>
                <div className="flex-1 bg-slate-900">
                    <Account selectedAccount={selectedAccount}/>
                </div>
            </div>
            
        </div>
    )
}