import React from "react";
import PropTypes from "prop-types";
import Alert from "../Alert";

function Scoreboard(props) {
    return (
        <div id="scoreboard">
            <h3>Scoreboard</h3>
            <dl className="row">
                <dt className="col-sm-6 text-right">Round: </dt>
                <dd className="col-sm-6 text-left">{props.round}</dd>
                <dt className="col-sm-6 text-right">Score: </dt>
                <dd className="col-sm-6 text-left">{props.score}</dd>
                <dt className="col-sm-6 text-right">High Score: </dt>
                <dd className="col-sm-6 text-left">{props.highScore}</dd>
            </dl>
            <Alert variant={props.message.variant}>{props.message.text}</Alert>
        </div>
    );
}

Scoreboard.propTypes = {
    round: PropTypes.number,
    score: PropTypes.number,
    highScore: PropTypes.number,
    message: PropTypes.object
};

export default Scoreboard;
