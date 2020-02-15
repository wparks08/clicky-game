import React from "react";
import PropTypes from "prop-types";

function Jumbotron(props) {
    return (
        <div className="jumbotron" {...props}>
            {props.children}
        </div>
    );
}

Jumbotron.propTypes = {
    children: PropTypes.any
};

export default Jumbotron;
