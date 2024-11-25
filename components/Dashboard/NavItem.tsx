"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavItemProps } from "./types";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const NavItem = ({ icon, label, path = "/" }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            href={path}
            className={cn(
              navigationMenuTriggerStyle(),
              "w-full justify-start px-5 py-2.5 rounded-xl",
              isActive && "bg-accent"
            )}
          >
            <div className="flex gap-3 items-start">
              <Image
                src={icon}
                alt={`${label} icon`}
                width={24}
                height={24}
                className={cn(
                  "object-contain shrink-0 w-6 aspect-square transition-all",
                  isActive && "[filter:invert(48%)_sepia(79%)_saturate(2476%)_hue-rotate(190deg)_brightness(118%)_contrast(119%)]"
                )}
              />
              <span className={cn(
                "w-28",
                isActive ? "text-primary font-medium" : "text-foreground"
              )}>
                {label}
              </span>
            </div>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};