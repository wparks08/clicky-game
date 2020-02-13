import React from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="container">
                <div className="row mt-4">
                    <div className="col-sm-12">
                        <div className="jumbotron">
                            {/*<h1 className="display-4">Clicky Game</h1>*/}
                            {/*<hr className="my-4" />*/}
                            <p>
                                Click on a picture to start playing! Click each picture only once. Every click increases
                                your score, and the game is over when you click a picture twice.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9" id="game">
                        <div className="row">
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
                        </div>
                        <div className="row">
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
                        </div>
                        <div className="row">
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
                        </div>
                        <div className="row">
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
                        </div>
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
                </div>
            </div>
        </div>
    );
}

export default App;
