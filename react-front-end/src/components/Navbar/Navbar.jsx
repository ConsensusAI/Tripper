import React, { useContext } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { AppContext } from "../hooks/useAppContext";

const logo = require("./TripperLogo.png");

export default function Navbar({ username, setFormData }) {
  const clearData = () => {
    return setFormData("");
  };
  const { user } = useContext(AppContext);

  return (
    <div className="navbar">
      <div className="navbarLogo" href="#">
        <Link to="/">
          <img
            src={logo}
            width="350"
            height="180"
            // onClick={clearData}
            alt=""
          ></img>
        </Link>
      </div>

      <SearchBar />

      {!username && (
        <div className="signIn">
          <Link to="/login">
            <button>Sign In</button>
          </Link>
        </div>
      )}

      {username && (
        <div className="signOut">
          <h2>Hello, {user.name}!</h2>
          <Link to="/profile">
            <button>User Profile</button>
          </Link>
          <Link to="/login">
            <button onClick={clearData}>Log Out</button>
          </Link>
        </div>
      )}
    </div>
  );
}
