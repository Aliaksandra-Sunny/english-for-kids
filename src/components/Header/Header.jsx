import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div className={styles.header}>
            <nav role="navigation">
                <div className={styles.menuToggle}>
                    <input type="checkbox" id="hmt" className={styles.hiddenMenuTicker}/>
                    <label className={styles.btnMenu} htmlFor="hmt">
                        <span className={styles.first}/>
                        <span className={styles.second}/>
                        <span className={styles.third}/>
                    </label>
                    <ul className={styles.hiddenMenu}>
                        <li> <NavLink to="/" className={styles.item}>Main Page</NavLink></li>
                        <li> <NavLink to="/card1" className={styles.item}>Actions (set A)</NavLink></li>
                        <li> <NavLink to="/card2" className={styles.item}>Actions (set B)</NavLink></li>
                        <li> <NavLink to="/card3" className={styles.item}>Actions (set C)</NavLink></li>
                        <li> <NavLink to="/card4" className={styles.item}>Adjective</NavLink></li>
                        <li> <NavLink to="/card5" className={styles.item}>Animals (set A)</NavLink></li>
                        <li> <NavLink to="/card6" className={styles.item}>Animals (set B)</NavLink></li>
                        <li> <NavLink to="/card7" className={styles.item}>Clothes</NavLink></li>
                        <li> <NavLink to="/card8" className={styles.item}>Emotions</NavLink></li>
                    </ul>
                </div>
            </nav>
            <div className={styles.switchContainer}>
                <label className={styles.switch}>
                    <input className={styles.switchInput} type="checkbox"/>
                    <span className={styles.switchLabel} data-on={"Train"} data-off={"Play"}></span>
                    <span className={styles.switchHandle}></span>
                </label>
            </div>
        </div>
    );
}

export default Header;
