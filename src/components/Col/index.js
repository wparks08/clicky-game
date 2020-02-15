import React from "react";
import PropTypes from "prop-types";

function Col(props) {
    let size = props.size
        ? props.size
              .split(" ")
              .map(size => "col-" + size)
              .join(" ")
        : "col";

    return (
        <div className={size} {...props}>
            {props.children}
        </div>
    );
}

Col.propTypes = {
    size: PropTypes.string,
    children: PropTypes.any
};

export default Col;
