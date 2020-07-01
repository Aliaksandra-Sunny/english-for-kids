import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import cards from "./data/cards";

function App(props) {
    return (
        <div className="App">
            <Header/>
            <div className='app-wrapper-content'>

                <Route exact path="/" render={() => <Main/>}/>
                <Route path="/card1" render={() => <Card card={cards[1]}/>}/>
                <Route path="/card2" render={() => <Card card={cards[2]}/>}/>
                <Route path="/card3" render={() => <Card card={cards[3]}/>}/>
                <Route path="/card4" render={() => <Card card={cards[4]}/>}/>
                <Route path="/card5" render={() => <Card card={cards[5]}/>}/>
                <Route path="/card6" render={() => <Card card={cards[6]}/>}/>
                <Route path="/card7" render={() => <Card card={cards[7]}/>}/>
                <Route path="/card8" render={() => <Card card={cards[8]}/>}/>
            </div>
        </div>
    );
}

export default App;
