import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div className={styles.header}>
            <nav>
                <div className={styles.menuToggle}>
                    <input type="checkbox" id="hmt" className={styles.hiddenMenuTicker}/>
                    <label className={styles.btnMenu} htmlFor="hmt">
                        <span className={styles.first}/>
                        <span className={styles.second}/>
                        <span className={styles.third}/>
                    </label>
                    <ul className={styles.hiddenMenu}>
                        <li> <NavLink to="/main" className={styles.item}>Main Page</NavLink></li>
                        <li> <NavLink to="/card" className={styles.item}>Actions (set A)</NavLink></li>
                        <li> <NavLink to="/card" className={styles.item}>Actions (set B)</NavLink></li>
                        <li> <NavLink to="/card" className={styles.item}>Actions (set C)</NavLink></li>
                        <li> <NavLink to="/card" className={styles.item}>Adjective</NavLink></li>
                        <li> <NavLink to="/card" className={styles.item}>Animals (set A)</NavLink></li>
                        <li> <NavLink to="/card" className={styles.item}>Animals (set B)</NavLink></li>
                        <li> <NavLink to="/card" className={styles.item}>Clothes</NavLink></li>
                        <li> <NavLink to="/card" className={styles.item}>Emotions</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;
