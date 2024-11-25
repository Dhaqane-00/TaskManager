import * as React from "react";
import { NavItemProps } from "./types";

export const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive }) => {
  return (
    <div className={`flex flex-col justify-center px-5 py-2.5 rounded-xl ${isActive ? 'bg-neutral-100' : ''}`}>
      <div className="flex gap-3 items-start">
        <img
          loading="lazy"
          src={icon}
          alt={`${label} icon`}
          className="object-contain shrink-0 w-6 aspect-square"
        />
        <div className="w-28 text-gray-900">{label}</div>
      </div>
    </div>
  );
};