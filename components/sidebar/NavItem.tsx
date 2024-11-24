import * as React from "react";
import { Button } from "@nextui-org/button";
import { NavItemProps } from "./types";

export const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive }) => {
  return (
    <Button
      variant="light"
      className={`
        justify-start px-5 py-2.5 h-auto
        ${isActive 
          ? 'bg-neutral-100 text-gray-900' 
          : 'bg-transparent text-slate-400 hover:bg-neutral-50 hover:text-gray-900'
        }
      `}
      radius="lg"
      fullWidth
    >
      <div className="flex gap-3 items-center">
        <div 
          className={`w-6 h-6 transition-colors duration-200 ${
            isActive 
              ? '[&_path]:stroke-gray-900' 
              : '[&_path]:stroke-slate-400 group-hover:[&_path]:stroke-gray-900'
          }`}
        >
          <img
            src={icon}
            alt={`${label} icon`}
            className="w-full h-full"
          />
        </div>
        <span className="w-28 text-left">{label}</span>
      </div>
    </Button>
  );
};