import React from "react";
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";

export function MainLayout({ children, loading, pageName, className }) {

  if (loading)
    return (  <div>
      <Navbar title={pageName} />
    <div className={`mainLayout ${className}`}>
    </div>
      </div>)
  return (
    <div>
      <Navbar title={pageName} />
      <div className={`mainLayout ${className}`}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {children}

    </div>    </div>
)
}

MainLayout.propTypes = {
  children: PropTypes.any,
  loading: PropTypes.bool,
  pageName: PropTypes.string,
  className: PropTypes.string,
};
