import React, { Component } from 'react';
import Dust from './Particles';
import axios from 'axios';
const Airtable = require('airtable');
new Airtable({apiKey: 'key74vfDhBaiTKQEi'}).base('appufnCRR9FkxkSCW');

class Basement extends Component {
    constructor() {
        super()

        this.state = {
            basement: []
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
               const array = response.data.records;
               const entries = array.map(el => el.fields);
               const basement = entries.filter(el => el.room === 'basement');
               this.setState({ basement });
           }) 
      .catch(error => {
        console.log(error);
       })  
    
    }

    render() {
        return(
            <div className="basement">
                   <header className="App-header">
                      <h1 className="main-title flashlight">Basement</h1>
                </header>
                <Dust/>
                <div className="card__display basement__display">
                {this.state.basement.map(el =>
                            <a target="_blank" href={el.urlText} rel="noopener noreferrer"> 
                    <div className="card flashlight--card card--basement">
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

export default Basement;