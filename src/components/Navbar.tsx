interface NavbarType{
    seedPhrase : string,
    setIsInitialised : any
}

export const Navbar = ({seedPhrase, setIsInitialised} : NavbarType) => {
    return (
        <div className="flex justify-end">
            <div className="flex">
            <div>
                {seedPhrase}
            </div>
            <div onClick={()=>{
                window.localStorage.setItem("isInitialised", "false");
                window.localStorage.removeItem("mnemonic");
                window.localStorage.removeItem("accounts");
                setIsInitialised(false);
            }}> 
                Reset
            </div>
            </div>
        </div>
    )
}