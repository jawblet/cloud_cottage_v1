import React, { Component } from 'react';
import firebar from '../Assets/firebar.gif';
import mac from '../Assets/madewithmac.gif';
import hotfood from '../Assets/hotfoodlogo.gif';
import hot from '../Assets/hot.gif';
import satellite from '../Assets/satellite.gif';
import alien from '../Assets/alien.gif';
import axios from 'axios';
const Airtable = require('airtable');
new Airtable({apiKey: 'key74vfDhBaiTKQEi'}).base('appufnCRR9FkxkSCW');


class ManCave extends Component {
    constructor() {
        super()
    
        this.state = {
            mancave: []
        }
    }

    componentDidMount() {    
        let axiosHeaders = {
            headers: {
             'Authorization': "Bearer key74vfDhBaiTKQEi", 
             'Content-Type': 'application/json' 
             }
           };
        axios
        .get('https://api.airtable.com/v0/appufnCRR9FkxkSCW/links', axiosHeaders)
           .then(response => {
               console.log(response);
               const array = response.data.records;
               const entries = array.map(el => el.fields);
               const mancave = entries.filter(el => el.urlText.includes('man'));
               this.setState({ mancave });
           }) 
      .catch(error => {
        console.log(error);
       })  
    }

    render() {
        return (
            <div className="mancave">
                <img className="mancave__hot" src={hot} alt="hot"/>

                 <header className="App-header">
                      <h1 className="main-title">Mancave >:)</h1>
                </header>
                <img className="mancave__mac" src={mac} alt="Macintosh 5ever baby"/>

                <img className="mancave__hotfood" src={hotfood} alt="hot food club"/>

                <img className="mancave__space" src={satellite} alt="satellite"/>


                <img className="mancave__fire" src={firebar} alt="gates of hell"/>
                <h3> *＊✿❀ Do not even think... about entering this mancave...<br/> 
                unless you pledge allegience to the queer art of Looking Cute ☽༓･*♡＊*</h3>
                <img className="mancave__fire" src={firebar} alt="gates of hell"/>

                <img className="mancave__alien" src={alien} alt="smoking alien"/>


                <div className="card__display">
                {this.state.mancave.map(el =>
                            <a target="_blank" href={el.urlText} rel="noopener noreferrer"> 
                    <div className="card">
                        <div className="card__border">
                            </div>
                            <span className="card__wrapper">
                                <h3 className="card__title">
                                    {el.name} left this here for {el.name === 'gretchen' ? 'julia' : 'gretchen'} 
                                </h3>
                                <p className="card__description"> {el.formText} </p>
                            </span>
                        <footer className="card__footer">
                        </footer>
                    </div>
                    </a>)}
                </div>

                <footer className="footer"></footer>
            </div>
        )
    }
}

export default ManCave