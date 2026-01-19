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
import { CopyIcon, TickIcon } from "./icons/Icons";


interface DashboardType{
    seedPhrase : string
    setIsInitialised : any
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
export const Dashboard = ({seedPhrase, setIsInitialised} : DashboardType) =>{
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
    });

    const [seedModal, setSeedModal] = useState<boolean>(false);

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



    const [isSeedCopied, setIsSeedCopied] = useState<boolean>(false);

    const handleCopySeed = () => {
        navigator.clipboard.writeText(seedPhrase);
        setIsSeedCopied(true);
        setTimeout(() => {
            setIsSeedCopied(false);
        }, 3000);
    };

    return(
        <div className="flex min-h-screen bg-zinc-950">
            
            <div className="w-1/6 bg-zinc-950 border-r border-zinc-900">
                <Sidebar accounts={accounts} generateSolanaWallet={generateSolanaWallet} generateEthereumWallet={generateEtheriumWallet} selectedAccount={selectedAccount} setSelectedAccount={setSelectedAccount}/>
            </div>
            <div className="flex-1 flex flex-col">
                <div className="bg-zinc-950">
                    <Navbar setIsInitialised={setIsInitialised} setSeedModal={setSeedModal}/>
                </div>
                <div className="flex-1 bg-zinc-950">
                    <Account selectedAccount={selectedAccount}/>
                </div>
            </div>

            {/* Seed Phrase Modal */}
            {seedModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50" onClick={() => setSeedModal(false)}>
                    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl w-125 max-w-[90%] shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-6">
                            <div className="text-xl font-bold text-zinc-100">Your Seed Phrase</div>
                            <div 
                                className="text-zinc-500 hover:text-zinc-200 cursor-pointer p-2 hover:bg-zinc-800 rounded-lg transition-colors"
                                onClick={() => setSeedModal(false)}
                            >
                                ✕
                            </div>
                        </div>
                        <div className="text-amber-500 text-sm mb-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                            Never share your seed phrase with anyone. Anyone with this phrase can access your wallet.
                        </div>
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            {seedPhrase.split(' ').map((word, index) => (
                                <div key={index} className="bg-zinc-950 border border-zinc-800 p-3 rounded-lg text-sm flex items-center">
                                    <span className="text-zinc-600 mr-3 select-none">{index + 1}.</span>
                                    <span className="text-zinc-200 font-medium">{word}</span>
                                </div>
                            ))}
                        </div>
                        <button 
                            className="w-full flex justify-center items-center gap-2 p-3.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all font-medium text-white shadow-lg shadow-indigo-900/20"
                            onClick={handleCopySeed}
                        >
                            {isSeedCopied ? (
                                <>
                                    <TickIcon size="18" />
                                    <span className="text-white">Copied!</span>
                                </>
                            ) : (
                                <>
                                    <CopyIcon size="18" />
                                    <span>Copy Seed Phrase</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            )}
            
        </div>
    )
}