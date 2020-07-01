import React, {Component} from 'react';
import styles from './CardItem.module.css';

class CardItem extends Component {
    constructor(props) {
        super(props);
        this.state = {rotate: ""};
    }

    onRotateClick = () => {
        this.setState({rotate: "translate"});
    };
    onRotateOff=()=>{
        this.setState({rotate: ""});
    };

    audioClick=(soundName)=>{
            const audio = new Audio(`${require(`../../../audio/${soundName}.mp3`)}`);
            audio.play()
    };

    render() {
        return (
            <div  onMouseLeave={this.onRotateOff} key={this.props.index} className={`${styles.card} ${styles[this.state.rotate]}`}>
                <div className={styles.front} onClick={()=>this.audioClick(this.props.card.word)}
                     style={{backgroundImage: `url(${require(`../../../img/${this.props.card.word}.jpg`)})`}}>
                    <div className={styles.header}>{this.props.card.word}</div>
                </div>
                <div className={styles.back} style={{backgroundImage: `url(${require(`../../../img/${this.props.card.word}.jpg`)})`}}>
                    <div className={styles.header}>{this.props.card.translation}</div>
                </div>
                <div onClick={this.onRotateClick} className={styles.rotate}/>
            </div>
        );
    }
}

export default CardItem;