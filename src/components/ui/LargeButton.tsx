import type { ReactElement } from "react";
import { RightArrowIcon } from "../icons/Icons";

interface LargeButtonType {
    onClick?: any
    title?: string, 
    description?: string, 
    Logo ?: ReactElement, 
    logoColor?: string,
    arrowColor?: string,
    hoverColor?: string,
    shadowColor?: string
}

export const LargeButton = ({ onClick, title, description, Logo, logoColor, arrowColor, hoverColor, shadowColor}: LargeButtonType) =>{

    return(
        <div className={`group transition-all ease-out duration-300 p-5 flex items-center gap-4 bg-zinc-900/50 backdrop-blur-sm rounded-2xl w-full border border-zinc-800 ${hoverColor} ${shadowColor} cursor-pointer`}
            onClick={onClick}>
            <div className={`p-3.5 rounded-xl ${logoColor} transition-colors`}>
               {Logo}
            </div>
            <div className="flex-1">
                <div className="font-bold text-lg text-zinc-100 mb-0.5">
                    {title}
                </div>
                <div className="text-sm text-zinc-400">
                    {description}
                </div>
            </div>
            <div className={`p-2 rounded-xl ${arrowColor} transition-all duration-300 transform group-hover:translate-x-1`}>
                <RightArrowIcon size="20"/>
            </div>
        </div>
    );
}