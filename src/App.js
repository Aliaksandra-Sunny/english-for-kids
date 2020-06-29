import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className='app-wrapper-content'>
                <Route path="/main" render={() => <Main/>}/>
                <Route path="/card" render={() => <Card/>}/>
            </div>
        </div>
    );
}

export default App;
