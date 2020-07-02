import React, {Component} from 'react';
import styles from './Card.module.css';
import CardItem from "./CardItem/CardItem";
import {connect} from "react-redux";
import {startGameAC} from "../../redux/reducer";
import correct from "../../audio/correct.mp3"
import error from "../../audio/error.mp3"

class Card extends Component {
    state = {
        card: this.props.card,
        counter: 0,
        random: 0,
    };

    componentDidMount() {
        this.setState({random: this.randomNum()});
        let audio = new Audio(`${require(`../../audio/${this.state.card[this.state.random].word}.mp3`)}`);
        audio.play()
    };

    error = new Audio(error);
    correct = new Audio(correct);

    decCounter = () => {
        this.error.play();
        this.setState({counter: this.state.counter - 1});
    };
    incCounter = () => {
        this.setState({counter: this.state.counter + 1});
        this.correct.play();
        let audio = new Audio(`${require(`../../audio/${this.state.card[this.state.random].word}.mp3`)}`);
        audio.play();
        this.setState({card: this.state.splice(this.state.random, 1)});
        this.setState({random: this.randomNum()})
    };

    randomNum = () => {
        return Math.floor(Math.random() * this.state.card);
    };

    onStartGame = () => {
        this.props.startGame();
        this.setState({random: this.randomNum()}, ()=>{
            let audio = new Audio(`${require(`../../audio/${this.state.card[this.state.random].word}.mp3`)}`);
            audio.play()
        });

    };

    render() {
        let cardItems = this.state.card.map((card, i) => {
            return <CardItem card={card} active={(this.state.random === i) ? "true" : ""} decCounter={this.decCounter}
                             incCounter={this.incCounter} key={i}/>;
        });

        return (
            <div className={styles.container}>
                {cardItems}
                <div className={styles.btns}>
                    <button onClick={this.onStartGame}
                            className={`${styles.btn} ${this.props.state.mode ? "" : styles.none}  ${this.props.state.play ? styles.repeat : ""} `}>
                        Start game
                    </button>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        state: state,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        startGame: () => {
            dispatch(startGameAC())
        }
    }
};

const ConnectedCard = connect(mapStateToProps, mapDispatchToProps)(Card);
export default ConnectedCard;