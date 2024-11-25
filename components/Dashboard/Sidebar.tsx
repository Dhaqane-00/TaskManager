import * as React from "react";
import { NavItem } from "./NavItem";
import { HelpCenter } from "./HelpCenter";

const navItems = [
  { icon: "/icons/overview.svg", label: "Overview", isActive: true },
  { icon: "/icons/book.svg", label: "Task" },
  { icon: "/icons/user.svg", label: "Mentors" },
  { icon: "/icons/message.svg", label: "Message" },
  { icon: "/icons/setting.svg", label: "Settings" }
];

export const Sidebar: React.FC = () => {
  return (
    <nav className="flex overflow-auto gap-8 px-8 pb-2.5 h-screen font-semibold bg-white max-sm:gap-4 max-sm:px-4">
      <div className="flex overflow-auto flex-col my-auto size-full">
        <header className="flex gap-3 items-start text-3xl tracking-tighter text-gray-900 whitespace-nowrap">
          <img
            loading="lazy"
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
            <div key={index} className={index > 0 ? "mt-6" : ""}>
              <NavItem {...item} />
            </div>
          ))}
        </div>

        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b19f9647cc93b31b23e95df2a14a5dae3e83b6af99928ebfcdf4155922fa836?placeholderIfAbsent=true&apiKey=bb1781ab9b3c4273bd093adb858d64be"
          alt=""
          className="object-contain z-10 self-center mt-auto mb-5 w-12 aspect-[0.92] rounded-[48px]"
        />

        <HelpCenter
          title="Help Center"
          description="Having Trouble in Learning. Please contact us for more questions."
          buttonText="Go To Help Center"
        />
      </div>
      <div className="shrink-0 h-full border border-solid border-neutral-100 w-[-31px]" />
    </nav>
  );
};