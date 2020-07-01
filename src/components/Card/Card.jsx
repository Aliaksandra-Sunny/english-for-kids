import React from 'react';
import styles from './Card.module.css';
import cards from "../../data/cards";

function Card(props) {
        let cardItems = props.card.map((card, index) => {
        return <div key={index} className={styles.card}>
            <div className={styles.front} style={{backgroundImage: `url(${require(`../../img/${card.word}.jpg`)})`}}>
                <div className={styles.header}>{card.word}</div>
            </div>
            <div className={styles.back}>
                <div className={styles.header}>{card.translation}</div>
            </div>
            <div className={styles.rotate}></div>
        </div>
    });
    return (
        <div className={styles.container}>
            {cardItems}
        </div>
    );
}

export default Card;