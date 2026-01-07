import { useState } from "react";
import { Dashboard } from "./Dashboard"
import { Landing } from "./Landing"

export const Parent = () =>{
    const [isInitialised, setIsInitialised] = useState<boolean>(false);
    return(
        <>
        {(isInitialised === false) ? <Landing setIsInitialised={setIsInitialised}/> : <Dashboard />}
        </>
    )
}