import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/home.png";
import users from "../assets/users.png";
import report from "../assets/report.png";
import settings from "../assets/settings.png";

const BottomNav = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "70px",
        padding: "10px 0",
        width: "100%",
        background: "#fff",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
        position: "fixed",
        bottom: "0",
        left: "0",
        justifyContent: "center",
      }}
    >
      <Link to="/" style={{ textAlign: "center", textDecoration: "none" }}>
        <img src={home} alt="Home" />
        <h2 style={{ fontSize: "10px", color: "#637D92" }}>Asosiy</h2>
      </Link>
      <Link to="/users" style={{ textAlign: "center", textDecoration: "none" }}>
        <img src={users} alt="Users" />
        <h2 style={{ fontSize: "10px", color: "#637D92" }}>Foydalanuvchilar</h2>
      </Link>
      <Link to="/reports" style={{ textAlign: "center", textDecoration: "none" }}>
        <img src={report} alt="Reports" />
        <h2 style={{ fontSize: "10px", color: "#637D92" }}>Hisobot</h2>
      </Link>
      <Link to="/settings" style={{ textAlign: "center", textDecoration: "none" }}>
        <img src={settings} alt="Settings" />
        <h2 style={{ fontSize: "10px", color: "#637D92" }}>Sozlamalar</h2>
      </Link>
    </div>
  );
};

export default BottomNav;
