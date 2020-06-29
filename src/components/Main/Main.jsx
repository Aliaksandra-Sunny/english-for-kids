import React from 'react';
import styles from'./Main.module.css';
import swim from "../../img/swim.jpg"
import dance from "../../img/dance.jpg"
import drop from "../../img/drop.jpg"
import friendly from "../../img/friendly.jpg"
import rabbit from "../../img/rabbit.jpg"
import giraffe from "../../img/giraffe.jpg"
import blouse from "../../img/blouse.jpg"
import happy from "../../img/happy.jpg"
import {NavLink} from "react-router-dom";

function Main() {
    return (
            <div className={styles.container}>
                <NavLink to="/card" className={`${styles.mainCard} ${styles.green}`}>
                    <img src={dance} alt=""/>
                    Action (set A)
                </NavLink>
                <NavLink to="/card" className={`${styles.mainCard} ${styles.green}`}>
                    <img src={swim} alt=""/>
                    Action (set B)
                </NavLink>
                <NavLink to="/card" className={`${styles.mainCard} ${styles.green}`}>
                    <img src={drop} alt=""/>
                    Action (set C)
                </NavLink>
                <NavLink to="/profile" className={`${styles.mainCard} ${styles.green}`}>
                    <img src={friendly} alt=""/>
                    Adjective
                </NavLink>
                <NavLink to="/profile" className={`${styles.mainCard} ${styles.green}`}>
                    <img src={rabbit} alt=""/>
                    Animals (set A)
                </NavLink>
                <NavLink to="/profile" className={`${styles.mainCard} ${styles.green}`}>
                    <img src={giraffe} alt=""/>
                    Animals (set B)
                </NavLink>
                <NavLink to="/profile" className={`${styles.mainCard} ${styles.green}`}>
                    <img src={blouse} alt=""/>
                    Clothes
                </NavLink>
                <NavLink to="/profile" className={`${styles.mainCard} ${styles.green}`}>
                    <img src={happy} alt=""/>
                    Emotions
                </NavLink>
            </div>
    );
}

export default Main;
