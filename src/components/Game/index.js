import React from "react";
import Row from "../Row";
import Col from "../Col";
import Gameboard from "../Gameboard";
import images from "../../data/images.json";

class Game extends React.Component {
    state = {
        round: 1,
        score: 0,
        highScore: 0,
        images: images.imagePaths,
        clicked: []
    };

    componentDidMount() {
        this.shuffleImages();
    }

    startNextRound = () => {
        this.setState({
            round: this.state.round + 1,
            score: 0,
            highScore: this.state.score > this.state.highScore ? this.state.score : this.state.highScore,
            clicked: []
        });
    };

    shuffleImages = () => {
        //shuffle 'em
        let images = this.state.images;
        let shuffledImages = [];
        while (images.length > 0) {
            let image = images[Math.floor(Math.random() * images.length)];
            shuffledImages.push(image);
            images = images.filter(img => img !== image);
        }

        this.setState({
            images: shuffledImages
        });
    };

    handleGamepieceClick = event => {
        let clicked = event.target.src;
        if (this.state.clicked.includes(clicked)) {
            this.startNextRound();
        } else {
            this.setState({
                score: this.state.score + 1,
                clicked: this.state.clicked.concat(clicked)
            });
            this.shuffleImages();
        }
    };

    render() {
        return (
            <Row>
                <Col size="md-9">
                    <Gameboard images={this.state.images} handleGamepieceClick={this.handleGamepieceClick} />
                </Col>
                <div className="col-md-3" id="scoreboard">
                    <h3>Scoreboard</h3>
                    <dl className="row">
                        <dt className="col-sm-6 text-right">Round: </dt>
                        <dd className="col-sm-6 text-left">{this.state.round}</dd>
                        <dt className="col-sm-6 text-right">Score: </dt>
                        <dd className="col-sm-6 text-left">{this.state.score}</dd>
                        <dt className="col-sm-6 text-right">High Score: </dt>
                        <dd className="col-sm-6 text-left">{this.state.highScore}</dd>
                    </dl>
                </div>
            </Row>
        );
    }
}

export default Game;
