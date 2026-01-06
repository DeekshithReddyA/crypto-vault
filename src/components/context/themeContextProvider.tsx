import { createContext, useState } from "react";

type ThemeType = "light" | "dark"; 

export const ThemeContext = createContext({});

export const ThemeContextProvider = ({children} : any) =>{

    const [theme, setTheme] = useState<ThemeType>("light");

    return (
        <ThemeContext.Provider value={{theme , setTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}