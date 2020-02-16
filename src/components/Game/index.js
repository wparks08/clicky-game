import React from "react";
import Row from "../Row";
import Col from "../Col";
import Gameboard from "../Gameboard";
import images from "../../data/images.json";
import Scoreboard from "../Scoreboard";

class Game extends React.Component {
    state = {
        round: 1,
        score: 0,
        highScore: 0,
        images: images.imagePaths,
        clicked: [],
        message: {
            text: "Click an image to begin!",
            variant: "info"
        }
    };

    componentDidMount() {
        this.shuffleImages();
    }

    startNextRound = () => {
        this.setState({
            round: this.state.round + 1,
            score: 0,
            highScore: this.state.score > this.state.highScore ? this.state.score : this.state.highScore,
            clicked: [],
            message: {
                text: "Already clicked that one! Starting next round.",
                variant: "danger"
            }
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
                clicked: this.state.clicked.concat(clicked),
                message: {
                    text: "Good job!",
                    variant: "success"
                }
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
                <Col size="md-3">
                    <Scoreboard
                        score={this.state.score}
                        round={this.state.round}
                        highScore={this.state.highScore}
                        message={this.state.message}
                    />
                </Col>
            </Row>
        );
    }
}

export default Game;
