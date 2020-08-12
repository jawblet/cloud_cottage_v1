import React, { Component } from 'react';
import axios from 'axios';
const Airtable = require('airtable');
new Airtable({apiKey: 'key74vfDhBaiTKQEi'}).base('appufnCRR9FkxkSCW');

class Patio extends Component {
    constructor() {
        super()

        this.state = {
            patio: []
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
               const patio = entries.filter(el => el.room === 'patio');
               this.setState({ patio });
           }) 
      .catch(error => {
        console.log(error);
       })  
    
    }

    render() {
        return (
            <div className="outside">
                 <header className="App-header">
                      <h1 className="main-title">Patio</h1>

                      <div className="card__display">
                {this.state.patio.map(el =>
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
                </header>
            </div>
        )
    }
}

export default Patio;