import React from 'react';
import styles from './Main.module.css';
import swim from "../../img/swim.jpg"
import dance from "../../img/dance.jpg"
import drop from "../../img/drop.jpg"
import friendly from "../../img/friendly.jpg"
import rabbit from "../../img/rabbit.jpg"
import giraffe from "../../img/giraffe.jpg"
import blouse from "../../img/blouse.jpg"
import happy from "../../img/happy.jpg"
import {Link, NavLink} from "react-router-dom";
import cards from "../../data/cards";

function Main() {
    return (
        <div className={styles.container}>
            <Link to="/card1"
                  className={`${styles.mainCard} ${styles.green}`}>
                <img src={dance} alt=""/>
                Action (set A)
            </Link>
            <Link to="/card2" className={`${styles.mainCard} ${styles.green}`}>
                <img src={swim} alt=""/>
                Action (set B)
            </Link>
            <Link to="/card3" className={`${styles.mainCard} ${styles.green}`}>
                <img src={drop} alt=""/>
                Action (set C)
            </Link>
            <NavLink to="/card4" className={`${styles.mainCard} ${styles.green}`}>
                <img src={friendly} alt=""/>
                Adjective
            </NavLink>
            <NavLink to="/card5" className={`${styles.mainCard} ${styles.green}`}>
                <img src={rabbit} alt=""/>
                Animals (set A)
            </NavLink>
            <NavLink to="/card6" className={`${styles.mainCard} ${styles.green}`}>
                <img src={giraffe} alt=""/>
                Animals (set B)
            </NavLink>
            <NavLink to="/card7" className={`${styles.mainCard} ${styles.green}`}>
                <img src={blouse} alt=""/>
                Clothes
            </NavLink>
            <NavLink to="/card8" className={`${styles.mainCard} ${styles.green}`}>
                <img src={happy} alt=""/>
                Emotions
            </NavLink>
        </div>
    )
        ;
}

export default Main;
