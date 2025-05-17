import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#2c3e50", 
        color: "#f5f1e9", 
        height: "60px",
        alignItems: "center",
        boxShadow: "0 2px 10px rgba(44, 62, 80, 0.7)",
        fontFamily: "'Merriweather', serif", 
        fontWeight: "500",
        fontSize: "16px",
        letterSpacing: "0.05em",
      }}
    >
      <div>
        <Link to={"/"} style={linkStyle}>
          Home
        </Link>
      </div>

      <div>
        <Link to={"/about"} style={linkStyle}>
          About
        </Link>
      </div>

      <div>
        <Link to={"/addproduct"} style={linkStyle}>
          Add Product
        </Link>
      </div>

      <div>
        <Link to={"/product"} style={linkStyle}>
          Product
        </Link>
      </div>

      <div>
        <button
          style={{
            backgroundColor: "#d4af37", 
            padding: "8px 20px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, transform 0.2s ease",
            fontFamily: "'Merriweather', serif",
            fontWeight: "600",
            color: "#2c3e50",
            boxShadow: "0 2px 8px rgba(212, 175, 55, 0.6)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#c19b2f"; 
            e.currentTarget.style.transform = "scale(1.07)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#d4af37";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <Link
            to={"/login"}
            style={{ color: "#2c3e50", textDecoration: "none" }}
          >
            Login
          </Link>
        </button>
      </div>
    </div>
  );
};

const linkStyle = {
  textDecoration: "none",
  color: "#f5f1e9", 
  padding: "10px 18px",
  borderRadius: "6px",
  transition: "background-color 0.3s ease, color 0.3s ease",
  fontWeight: "500",
  fontFamily: "'Merriweather', serif",
};

export default Navbar;
