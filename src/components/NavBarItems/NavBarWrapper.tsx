import React from "@astrojs/react";
import { NavBarItem } from "./NavBarItem";
const url = import.meta.env.BASE_URL;

const menu = [
  { enlace: url, titulo: "Inicio", key: "inicio" },
  { enlace: "guias", titulo: "Guias", key: "guias" },
  { enlace: "planificador", titulo: "Planificador", key: "planificador" },
];
export function NavBarWrapper() {
  return (
    <ul className="flex flex-col p-4 mt-4 bg-gray-50 border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      {menu.map((item) => (
        <>
          <NavBarItem {...item} />
        </>
      ))}
    </ul>
  );
}
