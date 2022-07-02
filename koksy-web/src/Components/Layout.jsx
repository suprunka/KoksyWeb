import React from "react";
import PropTypes from "prop-types";

export function MainLayout({children}) {
    return (
    <div className="mainLayout">
        {children}
    </div>)
  }
  
  MainLayout.propTypes = {
    children: PropTypes.any,
  };