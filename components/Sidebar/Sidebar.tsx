"use client";

import { useState } from "react";
import Image from "next/image";
import { NavItem } from "./NavItem";
import { HelpCenter } from "./HelpCenter";
import { HamburgerMenu } from "./HamburgerMenu";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: "/icons/overview.svg", label: "Overview", path: "/" },
  { icon: "/icons/book.svg", label: "Task", path: "/Task" },
  { icon: "/icons/user.svg", label: "Mentors", path: "/Mentors" },
  { icon: "/icons/message.svg", label: "Message", path: "/Messages" },
  { icon: "/icons/setting.svg", label: "Settings", path: "/Settings" }
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <HamburgerMenu isOpen={isOpen} onClick={toggleMenu} />
      </div>
      
      <nav className={cn(
        "fixed md:relative flex overflow-auto gap-8 px-8 pb-2.5 h-screen font-semibold bg-white max-sm:gap-4 max-sm:px-4 pt-4",
        "transition-transform duration-300 ease-in-out",
        "md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full",
        "z-40"
      )}>
        <div className="flex overflow-auto flex-col my-auto size-full pt-">
          <header className="flex gap-3 items-start text-3xl tracking-tighter text-gray-900 whitespace-nowrap">
            <Image
              src="/icons/log.svg"
              alt=""
              width={170}
              height={170}
              className="object-contain shrink-0 w-10 aspect-square"
            />
            <h1 className="w-[136px]">DNX</h1>
          </header>

          <div className="flex flex-col mt-8 text-sm tracking-tight leading-5 whitespace-nowrap min-h-[316px] text-slate-400 max-sm:mt-5">
            {navItems.map((item, index) => (
              <div key={item.path} className={index > 0 ? "mt-6" : ""}>
                <NavItem {...item} onClick={() => setIsOpen(false)} />
              </div>
            ))}
          </div>

          <Image
            src="/icons/Question.svg"
            alt=""
            width={48}
            height={48}
            className="object-contain z-10 self-center mt-auto mb-5 w-12 aspect-[0.92] rounded-[48px] relative butt"
          />

          <HelpCenter
            title="Help Center"
            description="Having Trouble in Learning. Please contact us for more questions."
            buttonText="Go To Help Center"
          />
        </div>
        <div className="shrink-0 h-full border border-solid border-neutral-100 w-[-31px]" />
      </nav>
      
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};