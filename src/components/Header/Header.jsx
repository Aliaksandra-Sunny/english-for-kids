import React, {Component} from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {changeModeAC} from "../../redux/reducer";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {menu: false};
    }

    closeMenu = () => {
        this.setState({menu: false});
    };
    changeMenu=()=>{
        this.setState({menu: !this.state.menu});
    };
    onClickChangeMode=()=>{
        this.props.changeMode();
    };

    render() {
        return (
            <div className={styles.header}>
                <nav role="navigation">
                    <div className={styles.menuToggle}>
                        <input checked={this.state.menu} type="checkbox" id="hmt" className={styles.hiddenMenuTicker}/>
                        <label onClick={this.changeMenu} className={styles.btnMenu} htmlFor="hmt">
                            <span className={styles.first}/>
                            <span className={styles.second}/>
                            <span className={styles.third}/>
                        </label>
                        <ul className={`${styles.hiddenMenu} ${this.props.mode? "": styles.green}`}>
                            <li><NavLink onClick={this.closeMenu} to="/" className={styles.item}>Main Page</NavLink></li>
                            <li><NavLink onClick={this.closeMenu} to="/card1" className={styles.item}>Actions (set A)</NavLink></li>
                            <li><NavLink onClick={this.closeMenu} to="/card2" className={styles.item}>Actions (set B)</NavLink></li>
                            <li><NavLink onClick={this.closeMenu} to="/card3" className={styles.item}>Actions (set C)</NavLink></li>
                            <li><NavLink onClick={this.closeMenu} to="/card4" className={styles.item}>Adjective</NavLink></li>
                            <li><NavLink onClick={this.closeMenu} to="/card5" className={styles.item}>Animals (set A)</NavLink></li>
                            <li><NavLink onClick={this.closeMenu} to="/card6" className={styles.item}>Animals (set B)</NavLink></li>
                            <li><NavLink onClick={this.closeMenu} to="/card7" className={styles.item}>Clothes</NavLink></li>
                            <li><NavLink onClick={this.closeMenu} to="/card8" className={styles.item}>Emotions</NavLink></li>
                        </ul>
                    </div>
                </nav>
                <div className={styles.switchContainer}>
                    <label className={styles.switch}>
                        <input checked={!this.props.mode} className={styles.switchInput} type="checkbox"/>
                        <span  onClick={this.onClickChangeMode} className={styles.switchLabel} data-on={"Train"} data-off={"Play"}/>
                        <span className={styles.switchHandle}/>
                    </label>
                </div>
            </div>
        );
    }
}

let mapStateToProps=(state)=>{
    return {
        mode: state.mode,
    }
};

let mapDispatchToProps=(dispatch)=>{
    return {
        changeMode:()=>{
            dispatch(changeModeAC())
        }
    }
};

const ConnectedHeader=connect(mapStateToProps, mapDispatchToProps)(Header)
export default ConnectedHeader;
