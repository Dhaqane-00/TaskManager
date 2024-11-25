import { useState } from "react";
import { cn } from "@/lib/utils";

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

export const HamburgerMenu = ({ isOpen, onClick }: HamburgerMenuProps) => {
  return (
    <button
      className="flex flex-col justify-center items-center md:hidden w-8 h-8"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <span
        className={cn(
          "block w-6 h-0.5 bg-gray-600 transition-all duration-300",
          isOpen && "rotate-45 translate-y-1.5"
        )}
      />
      <span
        className={cn(
          "block w-6 h-0.5 bg-gray-600 my-1.5 transition-all duration-300",
          isOpen && "opacity-0"
        )}
      />
      <span
        className={cn(
          "block w-6 h-0.5 bg-gray-600 transition-all duration-300",
          isOpen && "-rotate-45 -translate-y-1.5"
        )}
      />
    </button>
  );
}; 