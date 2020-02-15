import React from "react";
import PropTypes from "prop-types";

function Container(props) {
    return (
        <div className={`container${props.type === "fluid" ? "-fluid" : ""}`} {...props}>
            {props.children}
        </div>
    );
}

Container.defaultProps = {
    type: ""
};

Container.propTypes = {
    children: PropTypes.any,
    type: PropTypes.string
};

export default Container;
