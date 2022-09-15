import React from "@astrojs/react";

interface NavBarItemProps {
  titulo: string;
  enlace?: string;
}

export function NavBarItem({ titulo, enlace }: NavBarItemProps) {
  const cssClasses = {
    active:
      "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white",
    inactive:
      "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
  };

  return (
    <li>
      <a
        href={`./${enlace}`}
        className={cssClasses.inactive}
        aria-current="page"
      >
        {titulo}
      </a>
    </li>
  );
}
