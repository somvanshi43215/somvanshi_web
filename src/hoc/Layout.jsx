import React from "react";
import "./Layout.scss";
import Header from "../components/Header";
import Navigation from "../components/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <div className="top-head">
        <Navigation />
      </div>
      {children}
    </>
  );
};

export default Layout;
