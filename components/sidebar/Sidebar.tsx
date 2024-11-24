"use client";
import * as React from "react";
import { useState } from "react";
import { Link } from "@nextui-org/link";
import { usePathname } from "next/navigation";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { NavItem } from "./NavItem";
import { HelpCenter } from "./HelpCenter";
import { NavItemType } from "./types";
import Image from "next/image";

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
    <Card 
      className="flex relative h-screen bg-white w-[280px] border-r border-divider max-sm:top-0 max-sm:left-0 max-sm:duration-[0.3s] max-sm:w-[279px] max-sm:z-[100]"
      radius="none"
      shadow="none"
    >
      <Button
        isIconOnly
        variant="light"
        className="hidden max-sm:flex max-sm:absolute max-sm:top-5 max-sm:-right-10 max-sm:bg-gray-900 max-sm:rounded-full"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? "×" : "☰"}
      </Button>

      <CardBody className="flex flex-col justify-between py-6">
        <div className="flex flex-col">
          <header className="flex gap-3 items-start text-3xl tracking-tighter text-gray-900 whitespace-nowrap">
            <Image
              src="/icons/Book-squareLogo.svg"
              alt="DNX logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <h1 className="w-[136px]">DNX</h1>
          </header>

          <nav className="flex flex-col mt-10 gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                href={item.path}
                className="no-underline"
              >
                <NavItem {...item} />
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <Image 
            src="/icons/Question.svg" 
            alt="Help" 
            width={84} 
            height={48} 
            className="relative -mb-6 mx-auto"
          />
          <HelpCenter
            title="Help Center"
            description="Having Trouble in Learning. Please contact us for more questions."
            buttonText="Go To Help Center"
          />
        </div>
      </CardBody>
    </Card>
  );
};