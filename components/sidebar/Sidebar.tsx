"use client";
import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "./NavItem";
import { HelpCenter } from "./HelpCenter";
import { NavItemType } from "./types";

const initialNavItems: NavItemType[] = [
  { 
    icon: "/icons/overview.svg", 
    label: "Overview", 
    path: "/",
    isActive: true 
  },
  { 
    icon: "/icons/task.svg", 
    label: "Task", 
    path: "/tasks",
    isActive: false 
  },
  { 
    icon: "/icons/mentors.svg", 
    label: "Mentors", 
    path: "/mentors",
    isActive: false 
  },
  { 
    icon: "/icons/message.svg", 
    label: "Message", 
    path: "/messages",
    isActive: false 
  },
  { 
    icon: "/icons/settings.svg", 
    label: "Settings", 
    path: "/settings",
    isActive: false 
  }
];

export const Sidebar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = initialNavItems.map(item => ({
    ...item,
    isActive: pathname === item.path
  }));

  return (
    <nav className='flex relative px-8 pb-2.5 h-screen font-semibold text-white bg-white w-[280px] max-sm:top-0 max-sm:left-0 max-sm:duration-[0.3s] max-sm:w-[279px] max-sm:z-[100]'>
      <button
        className="hidden max-sm:block max-sm:absolute max-sm:top-5 max-sm:-right-10 max-sm:justify-center max-sm:items-center max-sm:w-8 max-sm:h-8 max-sm:bg-gray-900 max-sm:rounded-full max-sm:cursor-pointer max-sm:border-[none] max-sm:text-[white]"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        <span>{isMobileMenuOpen ? "×" : "☰"}</span>
      </button>

      <div className="flex flex-col justify-between py-6 w-full">
        <div className="flex flex-col">
          <header className="flex gap-3 items-start text-3xl tracking-tighter text-gray-900 whitespace-nowrap">
            <img
              loading="lazy"
              src="/icons/logo.svg"
              alt="DNX logo"
              className="object-contain shrink-0 w-10 aspect-square"
            />
            <h1 className="w-[136px]">DNX</h1>
          </header>

          <section className="flex flex-col mt-10 text-sm tracking-tight leading-5 text-slate-400">
            {navItems.map((item, index) => (
              <Link 
                href={item.path}
                key={item.path} 
                className={index > 0 ? "mt-6" : ""}
              >
                <NavItem {...item} />
              </Link>
            ))}
          </section>
        </div>

        <div className="flex flex-col gap-4">
          <button 
            className="z-10 self-center w-12 h-12 text-3xl font-bold tracking-wide leading-tight text-center whitespace-nowrap bg-gray-900 border-4 border-white border-solid rounded-[48px]"
            aria-label="Help"
          >
            ?
          </button>

          <HelpCenter
            title="Help Center"
            description="Having Trouble in Learning. Please contact us for more questions."
            buttonText="Go To Help Center"
          />
        </div>
      </div>
    </nav>
  );
};