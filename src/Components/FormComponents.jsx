import React from "react"
import PropTypes from "prop-types";

export function InvalidMessage({children}){
    console.log(children)
    return(
    <p className="invalidField">{children}</p>
    )
}
InvalidMessage.propTypes = {
    children: PropTypes.any
  };