import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";
import { CiCloudOn } from "react-icons/ci";
import { LuBookText, LuPhone } from "react-icons/lu";
import { BsGear } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";

const menuItems = [
  { icon: <AiOutlineHome />, label: "Repositories", path: "/app/repositories" },
  { icon: <FaCode />, label: "AI Code Review", path: "/app/code-review" },
  { icon: <CiCloudOn />, label: "Cloud Security", path: "/app/cloud-security" },
  { icon: <LuBookText />, label: "How to Use", path: "/app/how-to-use" },
  { icon: <BsGear />, label: "Settings", path: "/app/settings" },
  { icon: <LuPhone />, label: "Report", path: "/app/report" },
  { icon: <MdOutlineLogout />, label: "Logout", path: "/auth/saas" },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`flex flex-col h-screen w-full md:w-64 ${
        isOpen ? "bg-gray-800" : "bg-gray-100"
      } fixed md:relative z-50 transition-all duration-300`}
    >
      {/* Header Section */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-900 text-white md:hidden">
        <div className="text-xl font-bold">CodeAnt AI</div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          <img
            src={isOpen ? "/close.png" : "/bars.png"}
            alt="Menu Icon"
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Sidebar Content */}
      <div
        className={`flex flex-col flex-grow transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-4">
          <div className="flex items-center gap-2 mb-4 md:justify-center">
            <img src="/Group 37110.png" alt="CodeAnt Logo" className="w-10" />
            <p className="text-lg font-semibold text-gray-700 hidden md:block">
              CodeAnt AI
            </p>
          </div>

          {/* Dropdown */}
          <select className="w-full p-2 mb-4 border rounded-md focus:ring focus:ring-blue-500">
            <option value="UtkarshDhairy">UtkarshDhairy</option>
            <option value="Aulakh">Aulakh</option>
            <option value="Grewal">Grewal</option>
            <option value="Randhawa">Randhawa</option>
          </select>

          {/* Menu Items */}
          <nav className="flex flex-col gap-2">
            {menuItems.map((item, index) => (
              <Tab
                key={index}
                icon={item.icon}
                label={item.label}
                path={item.path}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

function Tab({
  icon,
  label,
  path,
  onClick,
}: {
  icon: React.ReactElement;
  label: string;
  path: string;
  onClick: () => void;
}) {
  return (
    <NavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-300 ${
          isActive
            ? "bg-blue-500 text-white"
            : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
        }`
      }
    >
      <div className="text-lg">{icon}</div>
      <p>{label}</p>
    </NavLink>
  );
}

export default Sidebar;
