import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <nav
      style={{
        position: "fixed",
        top: "24px",
        left: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 48px",
        zIndex: 1000,
      }}
    >
      {/* Brand */}
      <Link
        to="/"
        style={{
          fontSize: "20px",
          fontWeight: 700,
          fontFamily: "JetBrains Mono, monospace",
          color: "#ffffff",
          textDecoration: "none",
          userSelect: "none",
        }}
      >
        &lt;Ramcharan/&gt;
      </Link>

      {/* Floating Nav Links */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "36px",
          padding: "16px 40px",
          background: "rgba(120,120,120,0.3)",
          backdropFilter: "blur(10px)",
          borderRadius: "999px",
          boxShadow: "0 12px 35px rgba(0,0,0,0.35)",
        }}
      >
        {navItems.map((item) => (
          <Link
            key={item}
            to={`/${item}`}
            style={{
              textDecoration: "none",
              color: "#f1f1f1",
              fontSize: "15px",
              fontWeight: 500,
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#ffffff";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#f1f1f1";
              e.target.style.transform = "translateY(0)";
            }}
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;