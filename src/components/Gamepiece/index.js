import React from "react";
import PropTypes from "prop-types";
import path from "path";

function Gamepiece(props) {
    let imagePath = path.join(__dirname, props.image);

    return (
        <img src={imagePath} className="img-fluid img-thumbnail" onClick={props.handleGamepieceClick} alt="Gamepiece" />
    );
}

Gamepiece.propTypes = {
    image: PropTypes.string,
    handleGamepieceClick: PropTypes.func
};

export default Gamepiece;
