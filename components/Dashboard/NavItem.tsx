"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItemProps } from "./types";

export const NavItem = ({ icon, label, path = "/" }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link href={path}>
      <div className={`flex flex-col justify-center px-5 py-2.5 rounded-xl transition-colors ${
        isActive ? 'bg-neutral-100' : 'hover:bg-neutral-50'
      }`}>
        <div className="flex gap-3 items-start">
          <Image
            src={icon}
            alt={`${label} icon`}
            width={24}
            height={24}
            className={`object-contain shrink-0 w-6 aspect-square transition-all ${
              isActive ? '[filter:invert(48%)_sepia(79%)_saturate(2476%)_hue-rotate(190deg)_brightness(118%)_contrast(119%)]' : ''
            }`}
          />
          <div className={`w-28 ${
            isActive ? 'text-[#3B82F6] font-medium' : 'text-gray-900'
          }`}>
            {label}
          </div>
        </div>
      </div>
    </Link>
  );
};