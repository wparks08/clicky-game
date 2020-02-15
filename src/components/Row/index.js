import React from "react";
import PropTypes from "prop-types";

function Row(props) {
    return (
        <div className="row" {...props}>
            {props.children}
        </div>
    );
}

Row.propTypes = {
    children: PropTypes.any
};

export default Row;
