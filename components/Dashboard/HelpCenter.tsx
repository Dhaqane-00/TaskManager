import * as React from "react";
import { HelpCenterProps } from "./types";

export const HelpCenter: React.FC<HelpCenterProps> = ({ 
  title, 
  description, 
  buttonText, 
  onHelpClick 
}) => {
  return (
    <div className="flex overflow-hidden flex-col text-xs tracking-tight text-center text-white bg-gray-900 rounded-xl">
      <div className="flex flex-col pb-4 rounded-xl bg-gray-900 bg-opacity-0">
        <div className="flex shrink-0 rounded-full bg-white bg-opacity-10 h-[60px] w-[66px]" />
        <div className="flex flex-col items-center px-4 mt-4">
          <h2 className="text-base tracking-tight">{title}</h2>
          <p className="mt-4 font-medium">{description}</p>
          <button 
            className="self-stretch px-7 py-4 mt-11 text-gray-900 bg-white rounded-xl hover:bg-gray-50 transition-colors"
            onClick={onHelpClick}
            aria-label={buttonText}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};