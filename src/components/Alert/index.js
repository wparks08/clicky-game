import React from "react";
import PropTypes from "prop-types";

function Alert(props) {
    return <div className={`alert alert${props.variant ? "-" + props.variant : ""}`}>{props.children}</div>;
}

Alert.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.any
};

export default Alert;
