import { useState, useEffect } from "react";
import { Dashboard } from "./Dashboard"
import { Landing } from "./Landing"

export const Parent = () =>{
    const [isInitialised, setIsInitialised] = useState<boolean>(false);
    const [seedPhrase, setSeedPhrase] = useState<string>("");
    
    useEffect(() => {
        if(window.localStorage.getItem("isInitialised") === null) {
            window.localStorage.setItem("isInitialised", "false");
        } else {
            const mnemonic = window.localStorage.getItem("mnemonic");
            setSeedPhrase(mnemonic || "");
            setIsInitialised(true);
        }
    }, []);

    return(
        <>
            {(isInitialised === false) ? <Landing setIsInitialised={setIsInitialised} setSeedPhrase={setSeedPhrase}/> : <Dashboard seedPhrase={seedPhrase} setIsInitialised={setIsInitialised} isInitialised={isInitialised}/>}
        </>
    )
}