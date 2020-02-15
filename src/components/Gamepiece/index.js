import React from "react";
import PropTypes from "prop-types";

function Gamepiece(props) {
    return <img src={props.image} className="img-fluid img-thumbnail" onClick={props.handleGamepieceClick} />;
}

Gamepiece.propTypes = {
    image: PropTypes.string,
    handleGamepieceClick: PropTypes.func
};

export default Gamepiece;
