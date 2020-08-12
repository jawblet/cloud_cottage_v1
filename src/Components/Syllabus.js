import React, {Component} from 'react';
import axios from 'axios';
const Airtable = require('airtable');
new Airtable({apiKey: 'key74vfDhBaiTKQEi'}).base('appufnCRR9FkxkSCW');


class Syllabus extends Component {

state = { 
    entries: [] 
} 

componentDidMount() {
   console.log("I mounted");
    
   let axiosHeaders = {
       headers: {
        'Authorization': "Bearer key74vfDhBaiTKQEi", 
        'Content-Type': 'application/json' 
        }
      };
    
    axios.get('https://api.airtable.com/v0/appufnCRR9FkxkSCW/links',
        axiosHeaders).then(response => {
            const array = response.data.records;
            const entries = array.map(el => el.fields);
            this.setState({ entries });
        }) 
   .catch(error => {
     console.log(error);
    })  
};

render() {
    let god = this.state;
    console.log(god);
    
    return(
        <div className="this-is-the-titular-component">
            <div className="library--header">
                The librarian is in. 
            </div>
            <div className="library--list">
              {this.state.entries.map(entry => <h5 className="library--book">{entry.name} put&nbsp; 
                <a href={entry.urlText} className="library--link" target="_blank" rel="noopener noreferrer">{entry.urlText} </a>
               in the {entry.room} on {entry.id}.
                {entry.formText ? ` she added: ${entry.formText}` : ''}
              </h5>)}
            </div>
            <footer className="footer"></footer>
        </div>
        )
    } 
}
   
export default Syllabus;