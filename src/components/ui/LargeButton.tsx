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
        <div className={`group transition-all ease-in-out duration-300 p-5 flex items-center gap-3 bg-gray-900 rounded-xl w-full border border-transparent ${hoverColor} ${shadowColor} hover:cursor-pointer`}
            onClick={onClick}>
            <div className={`p-3 rounded-lg ${logoColor}`}>
               {Logo}
            </div>
            <div className="flex-1">
                <div className="font-semibold text-lg m-1">
                    {title}
                </div>
                <div className="text-xs m-1">
                    {description}
                </div>
            </div>
            <div className={`p-2 rounded-lg ${arrowColor} transition-all ease-in-out duration-300`}>
                <RightArrowIcon size="24"/>
            </div>
        </div>
    );
}