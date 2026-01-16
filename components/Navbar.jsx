import React from "react";
import "./Navbar.css";
import { IconHome, IconUser, IconMessage } from "@tabler/icons-react";

const navItems = [
  { name: "Home", link: "#home",  },
  { name: "About", link: "#about",  },
  {name:"Projects",link : "#link",},
  { name: "Contact", link: "#contact",  },
];

export default function Navbar() {
  return (
    <nav className="floating-nav">
      {navItems.map((item) => (
        <a key={item.name} href={item.link} className="nav-item">
          {item.icon}
          <span>{item.name}</span>
        </a>
      ))}
    </nav>
  );
}