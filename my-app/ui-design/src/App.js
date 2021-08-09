import React from "react";
import AnnoFeed from "./Announcement/AnnoFeed";
import Navbarr from "./Navbarr";
import annos from "./Аnnouncement";
import Footer from "./Footer";
import Statistics from "./Statistics";
import PieChart from "./PieChart"
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {

    return (

        <div style={{background: "white"}}>
            <Navbarr/>
            <div className="wrapper">
                <AnnoFeed annos={annos}/>
            </div>
            <h1 align="center">Раздел статистики</h1>
            <div className="statistics" align="center">
                <Statistics/>
                <PieChart/>
            </div>
            <Footer>
            </Footer>
        </div>
    )
}

export default App;
