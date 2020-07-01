import React from 'react';
import styles from './Card.module.css';
import CardItem from "./CardItem/CardItem";

function Card(props) {
    let cardItems = props.card.map((card, index) => {
        return <CardItem index={index} card={card}/>
    });
    return (
        <div className={styles.container}>
            {cardItems}
        </div>
    );
}

export default Card;