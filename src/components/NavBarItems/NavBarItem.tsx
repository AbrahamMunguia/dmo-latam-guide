import React from "@astrojs/react";
import "./NavBarItems.css";

interface NavBarItemProps {
  titulo: string;
  enlace?: string;
}

export function NavBarItem({ titulo, enlace }: NavBarItemProps) {
  const cssClasses = {
    active: "elementMenuActive",
    inactive: "elementMenu",
  };

  return (
    <li>
      <a href={`${enlace}`} className={cssClasses.inactive} aria-current="page">
        {titulo}
      </a>
    </li>
  );
}
