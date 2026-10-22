import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BagIcon, BellIcon, HeartIcon, HomeIcon } from "./Icons";

const tabs = [
  { id: "home", label: "Home", renderIcon: (active) => <HomeIcon active={active} /> },
  { id: "favourite", label: "Favourites", renderIcon: (active) => <HeartIcon filled={active} /> },
  { id: "bag", label: "Bag", renderIcon: () => <BagIcon />, to: "/order" },
  { id: "notification", label: "Notifications", renderIcon: () => <BellIcon /> },
];

export default function BottomNav() {
  const navigate = useNavigate();
  const [active, setActive] = useState("home");

  const handleClick = (tab) => {
    setActive(tab.id);
    if (tab.to) navigate(tab.to);
  };

  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 mx-auto w-full max-w-[430px] rounded-t-3xl bg-white pb-[calc(24px_+_env(safe-area-inset-bottom))] shadow-[0_-4px_24px_rgba(0,0,0,0.04)]">
      <ul className="grid grid-cols-4 px-[27.5px] pt-6">
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <li key={tab.id} className="flex justify-center">
              <button
                type="button"
                onClick={() => handleClick(tab)}
                aria-label={tab.label}
                aria-current={isActive ? "page" : undefined}
                className={`flex h-[50px] w-12 flex-col items-center gap-1.5 transition ${
                  isActive ? "text-brown" : "text-muted hover:text-brown"
                }`}
              >
                {tab.renderIcon(isActive)}
                <span className={`h-[5px] w-2.5 rounded-full bg-brown transition ${isActive ? "opacity-100" : "opacity-0"}`} />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
