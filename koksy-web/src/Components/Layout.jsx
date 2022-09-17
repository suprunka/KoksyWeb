import React from "react";
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function MainLayout({ children, loading }) {

  if (loading)
    return (<div className="mainLayout">
    </div>)
  return (
    <div className="mainLayout">

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

    </div>)
}

MainLayout.propTypes = {
  children: PropTypes.any,
  loading: PropTypes.bool,
};
