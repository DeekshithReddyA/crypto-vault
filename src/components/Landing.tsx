import { StarIcon } from "./icons/Icons";
import { WalletIcon } from "./icons/Wallet";
import { LargeButton } from "./ui/LargeButton";
import { generateMnemonic } from "bip39";


interface LandingType{
    setIsInitialised : any,
    setSeedPhrase : any
}

export const Landing = ({setIsInitialised, setSeedPhrase} : LandingType) =>{

    const generateSeedPhrase = () => {
        const mnemonic = generateMnemonic();
        
        window.localStorage.setItem("mnemonic", mnemonic);
        window.localStorage.setItem("isInitialised", "true");
        setSeedPhrase(mnemonic);
        setIsInitialised(true);

    }

    return(
        <div className="min-h-screen relative overflow-hidden flex justify-center items-center bg-zinc-950"> 
            <div className="absolute top-1/8 left-1/2 -translate-x-1/2 w-150 h-150 rounded-full bg-indigo-500/10 blur-[100px]"></div>
            <div className="flex flex-col items-center gap-6 p-4 w-1/3 z-10">
                <div className="p-5 bg-zinc-900/50 border border-zinc-800 rounded-2xl shadow-xl backdrop-blur-sm">
                    <div className="text-indigo-400">
                        <WalletIcon size="40" />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-1 mb-4">
                    <div className="text-4xl text-white font-bold tracking-tight">
                        CryptoVault
                    </div>
                    <div className="text-zinc-400 text-sm font-medium">
                        Secure HD Wallet Generator
                    </div>
                </div>
                {/* {isImportPage ? 
                    <div className="flex flex-col items-center space-y-2 w-full">
                        <div className="text-xl font-semibold tracking-wide">
                            Import Wallet
                        </div>
                        <div className="text-sm text-neutral-500 tracking-wide">
                            Enter your 12-word recovery phrase
                        </div>
                        <div className="m-1 p-6 h-48 bg-gray-900 w-full rounded-xl">
                            <textarea rows={5} className="p-2 w-full focus:outline-none border-3 border-neutral-800 focus:border-3 rounded-xl focus:border-green-500/90 resize-none bg-black" placeholder="word1 word2 word3 word4 word5 word6 word7 word8 word9 word10 word11 word12">

                            </textarea>
                        </div>
                        <div className="m-5 flex w-full space-x-2">
                            <div className="flex justify-center p-2 w-1/2 bg-black border border-neutral-800 rounded-xl text-neutral-200 hover:cursor-pointer hover:bg-violet-500/80"
                            onClick={()=>{
                                setIsImportPage(false);
                            }}>
                                Back
                            </div>
                            <div className="flex w-1/2 justify-center p-2 bg-green-500/50 rounded-xl text-black hover:cursor-pointer hover:bg-green-500">
                                Import Wallet
                            </div>
                        </div>
                    </div> 
                    : */}
                     <div className="w-full space-y-4 m-2">
                        <LargeButton 
                            onClick={()=>{ generateSeedPhrase(); }} 
                            title="Create New Wallet" 
                            description="Generate a new 12-word seed phrase" 
                            Logo={<StarIcon size="24"/>} 
                            logoColor="bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20" 
                            arrowColor="bg-zinc-800 text-zinc-400 group-hover:bg-indigo-500 group-hover:text-white" 
                            hoverColor="hover:border-indigo-500/30 hover:bg-zinc-900/80" 
                            shadowColor="hover:shadow-lg hover:shadow-indigo-500/10"
                        />
                        {/* <LargeButton onClick={()=>{
                            setIsImportPage(true);
                        }} title="Import Wallet" description="Use your existing recovery seed phrase" Logo={<ImportIcon size="24" />} logoColor="bg-violet-900/30 text-violet-500 group-hover:bg-violet-800/30" arrowColor="bg-violet-800/30 group-hover:bg-violet-600/90" hoverColor="hover:border-violet-500/90" shadowColor="hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"/> */}
                    </div>
                {/* }  */}
            </div>
        </div>
    );
}