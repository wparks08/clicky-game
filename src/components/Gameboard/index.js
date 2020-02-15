import React from "react";
import PropTypes from "prop-types";
import Row from "../Row";
import Col from "../Col";
import Gamepiece from "../Gamepiece";

function Gameboard(props) {
    const images = props.images.map(img => {
        return (
            <Col size="sm-3" key={img}>
                <Gamepiece image={img} handleGamepieceClick={props.handleGamepieceClick} />
            </Col>
        );
    });

    return (
        <div id="game">
            <Row>{images}</Row>
        </div>
    );
}

Gameboard.propTypes = {
    images: PropTypes.array,
    handleGamepieceClick: PropTypes.func
};

export default Gameboard;
