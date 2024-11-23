import * as React from "react";

import { NavItemProps } from "./types";

export const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive }) => {
  return (
    <div 
      className={`
        group flex flex-col justify-center px-5 py-2.5 rounded-xl 
        transition-all duration-200 cursor-pointer
        ${isActive 
          ? 'bg-neutral-100 text-gray-900' 
          : 'text-slate-400 hover:bg-neutral-50 hover:text-gray-900'
        }
      `}
    >
      <div className="flex gap-3 items-start">
        <div 
          className={`w-6 h-6 transition-colors duration-200 ${
            isActive 
              ? '[&_path]:!stroke-gray-900' 
              : '[&_path]:stroke-slate-400 group-hover:[&_path]:stroke-gray-900'
          }`}
        >
          <img
            src={icon}
            alt={`${label} icon`}
            className="w-full h-full"
            style={{
              filter: isActive 
                ? 'invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)' 
                : 'none'
            }}
          />
        </div>
        <div className="w-28">{label}</div>
      </div>
    </div>
  );
};