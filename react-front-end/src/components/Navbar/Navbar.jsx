import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import { SearchBar } from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AppContext } from "../hooks/useAppContext";
import { Button } from "@mui/material";

const logo = require("./TripperLogo.png");

export default function Navbar({ setFormData }) {
  const clearData = () => {
    return setFormData("");
  };
  const { user } = useContext(AppContext);

  // For presentation purposes...Demo
  const username = "Shakespeare";

  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 12,
    padding: "6px 12px",
    border: "1px solid",
    marginLeft: "5px",
    lineHeight: 1.5,
    backgroundColor: "#0063cc",
    borderColor: "#0063cc",
    fontFamily: ["Roboto"].join(","),
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  });

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
          <h5>Hello, {user.name}!</h5>
          <div className = "singOutProfile">
          <Link to="/profile">
            <BootstrapButton variant="contained" size="small">
              User Profile
            </BootstrapButton>
          </Link>
          </div>
          <div className = "signOutLogOut">
          <Link to="/login">
            <BootstrapButton
              variant="contained"
              size="small"
              onClick={clearData}
            >
              Log Out
            </BootstrapButton>
          </Link>
          </div>
        </div>
      )}
    </div>
  );
}
