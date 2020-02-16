import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/Container";
import Game from "./components/Game";

function App() {
    document.title = "Clicky-Game";

    return (
        <div className="App">
            <Navbar />
            <Container>
                <Header>
                    <p>
                        Click on a picture to start playing! Click each picture only once. Every click increases your
                        score, and the game is over when you click a picture twice.
                    </p>
                </Header>
                <Game />
            </Container>
        </div>
    );
}

export default App;
