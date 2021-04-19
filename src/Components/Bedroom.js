import React, {Component } from 'react';
import axios from 'axios';
const Airtable = require('airtable');
new Airtable({apiKey: 'key74vfDhBaiTKQEi'}).base('appufnCRR9FkxkSCW');

class Bedroom extends Component {
    constructor() {
        super()

    this.state = {
            lightsOn: true,
            bedroom: []
        }
        this.turnOnLights = this.turnOnLights.bind(this);
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
           const bedroom = entries.filter(el => el.room === 'bedroom');
           this.setState({ bedroom });
       }) 
  .catch(error => {
    console.log(error);
   })  

}

turnOnLights() {
    console.log("I was clicked");
    this.setState({
        lightsOn: !this.state.lightsOn})  
}

render() 
{
        return (
            <div className={this.state.lightsOn ? "bedroom" : "darkBedroom"}>
                <header className="App-header">
                      <h1 className="main-title">Bedroom</h1>
                </header>
            <div className="bedroom--wrapper">
                <div className="bedroom--lightswitch"> 
                    <button className="bedroom--lights" onClick={this.turnOnLights}></button>
                    <div className="bedroom--label">Lights</div>
                </div>
                <div className="card__display">
                {this.state.bedroom.map(el =>
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
            </div>
            <footer className="footer"></footer>
        </div>
        )
    }

};

export default Bedroom;