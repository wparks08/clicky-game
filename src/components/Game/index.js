import React from "react";
import Row from "../Row";

class Game extends React.Component {
    state = {
        round: 1,
        score: 0,
        highScore: 0
    };

    render() {
        return (
            <Row>
                <div className="col-md-9" id="game">
                    <Row>
                        <div className="col-sm-3">
                            <img src="/assets/img/pic1.png" className="img-fluid img-thumbnail" />
                        </div>
                        <div className="col-sm-3">
                            <img src="/assets/img/pic2.png" className="img-fluid img-thumbnail" />
                        </div>
                        <div className="col-sm-3">
                            {" "}
                            <img src="/assets/img/pic3.png" className="img-fluid img-thumbnail" />
                        </div>
                        <div className="col-sm-3">
                            {" "}
                            <img src="/assets/img/pic4.png" className="img-fluid img-thumbnail" />
                        </div>
                    </Row>
                    <Row>
                        <div className="col-sm-3">
                            {" "}
                            <img src="/assets/img/pic5.png" className="img-fluid img-thumbnail" />
                        </div>
                        <div className="col-sm-3">
                            {" "}
                            <img src="/assets/img/pic6.png" className="img-fluid img-thumbnail" />
                        </div>
                        <div className="col-sm-3">
                            {" "}
                            <img src="/assets/img/pic7.png" className="img-fluid img-thumbnail" />
                        </div>
                        <div className="col-sm-3">
                            {" "}
                            <img src="/assets/img/pic8.png" className="img-fluid img-thumbnail" />
                        </div>
                    </Row>
                    <Row>
                        <div className="col-sm-3">
                            {" "}
                            <img src="/assets/img/pic9.png" className="img-fluid img-thumbnail" />
                        </div>
                        <div className="col-sm-3">
                            {" "}
                            <img src="/assets/img/pic10.png" className="img-fluid img-thumbnail" />
                        </div>
                        <div className="col-sm-3">
                            {" "}
                            <img src="/assets/img/pic11.png" className="img-fluid img-thumbnail" />
                        </div>
                        <div className="col-sm-3">
                            {" "}
                            <img src="/assets/img/pic12.png" className="img-fluid img-thumbnail" />
                        </div>
                    </Row>
                    <Row>
                        <div className="col-sm-3">
                            {" "}
                            <img src="/assets/img/pic13.png" className="img-fluid img-thumbnail" />
                        </div>
                        <div className="col-sm-3">
                            {" "}
                            <img src="/assets/img/pic14.png" className="img-fluid img-thumbnail" />
                        </div>
                        <div className="col-sm-3">
                            {" "}
                            <img src="/assets/img/pic15.png" className="img-fluid img-thumbnail" />
                        </div>
                        <div className="col-sm-3">
                            {" "}
                            <img src="/assets/img/pic16.png" className="img-fluid img-thumbnail" />
                        </div>
                    </Row>
                </div>
                <div className="col-md-3" id="scoreboard">
                    <h3>Scoreboard</h3>
                    <dl className="row">
                        <dt className="col-sm-6 text-right">Round: </dt>
                        <dd className="col-sm-6 text-left">0</dd>
                        <dt className="col-sm-6 text-right">Score: </dt>
                        <dd className="col-sm-6 text-left">0</dd>
                        <dt className="col-sm-6 text-right">High Score: </dt>
                        <dd className="col-sm-6 text-left">0</dd>
                    </dl>
                </div>
            </Row>
        );
    }
}

export default Game;
