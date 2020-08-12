import React from 'react';
import { Link } from 'react-router-dom';
import home from '../Assets/Home.svg';

const Home = () =>{
    return (
        <div className="outside">
                 <header className="App-header">
                      <h1 className="main-title">Bob's Cottage</h1>
                      <h3 className="subtitle">Welcome to your summer content cottage</h3>
                </header>
        <div className="home-and-grounds">
            <div className="grounds-top"><Link to="/patio"><span>patio</span></Link>
            </div>
            <div className="home">
                <ul className="home__rules" draggable="true">
                    <h4 className="home__rules--title">House rules</h4>
                    <li className="home__rule">Save liberally/discard with respect.</li>
                    <li className="home__rule">Don't hide the seams.</li>
                    <li className="home__rule">Recycle.</li>
                    <li className="home__rule">The key is under the rock.</li>
                    </ul>
                <img src={home} alt="a humble home" className="home__cottage"/>
                <div className="home__driveway">
                    <Link to="/submit">
                        <span>front door</span>
                    </Link>
                    <Link to="/bedroom">
                        <span>bedroom</span>
                    </Link>
                </div>
                <Link to="/rock">
                    <div className="rock">
                        <div className="rock--block"></div>
                            <span className="the-rock">the rock</span>
                    </div>
                </Link>

            </div>
            <Link to ="/basement"><div className="grounds-bottom">basement (not pictured)</div>
                    </Link>
        </div>
    </div>
    )
}

export default Home;