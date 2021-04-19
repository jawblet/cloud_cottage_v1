import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Submit from './Submit';
import Home from './Components/Home';
import Bedroom from './Components/Bedroom';
import Basement from './Components/Basement';
import Syllabus from './Components/Syllabus';
import Rock from './Components/Rock';
import Patio from './Components/Patio';
import ManCave from './Components/ManCave';
import axios from 'axios';
const Airtable = require('airtable');
new Airtable({apiKey: 'key74vfDhBaiTKQEi'}).base('appufnCRR9FkxkSCW');

class App extends Component {
  constructor(props) {
    super(props)

    this.submitForm = this.submitForm.bind(this);
    this.recordValue=this.recordValue.bind(this);
    this.recordName=this.recordName.bind(this);
    this.recordRoom=this.recordRoom.bind(this);
    this.refreshForm=this.refreshForm.bind(this);
    this.sendEmail=this.sendEmail.bind(this);


    this.state = {
      name: 'gretchen',
      active: 0,
      urlText: '',
      formText: '',
      room: 'patio',
      activeRoom: 0,
      formSubmitted: false
    }
  }

submitForm(form, submitted) {
    this.setState({ [form]: submitted });
    console.log("the form is submitted");

    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;

    const formSubmitHandler = e => {
          const data = { 
            "records": [
              {
              "fields": {
                "id": dateTime,
                "name": this.state.name,
                "urlText": this.state.urlText,
                "formText": this.state.formText,
                "room": this.state.room
              }
            }
          ]        
        }
        console.log(data);
        
        let axiosConfig = {
             headers: {
              'Authorization': "Bearer key74vfDhBaiTKQEi", 
              'Content-Type': 'application/json' 
              }
            };

        axios
        .post('https://api.airtable.com/v0/appufnCRR9FkxkSCW/links', 
        data, 
        axiosConfig)
        .then(function(response) {
            console.log("Airtable called");    
        }).catch(function(error) {
          console.log(error);
        })  
    
    this.sendEmail(data);
  }

  formSubmitHandler();
}

sendEmail = (variables) => {
  const templateId = 'new_link';
  const submit = variables.records[0].fields;
  console.log('send email called');
  console.log(submit.name, submit.room);
  let emailTo, receiver;

  if(submit.name === 'julia'){
     emailTo = 'gretchenpalexander@gmail.com';
     receiver = 'gretchen';
  } else {
    emailTo = 'julia.bell@piano.io';
    receiver = 'julia';
  }

  const emailData = {sender: submit.name, 
                    receiver: receiver, 
                    room: submit.room, 
                    email: emailTo }
  
  console.log(emailData);

  window.emailjs.send('gmail', templateId, emailData).then(response => {
    console.log(`email sent successfully`)
  }).catch(error => console.error(`email failed: ${error}`)); 
}


refreshForm(form, refresh) {
  this.setState({ [form]: refresh })
};

recordValue(name, value) {
    this.setState({ [name]: value }) 
};

recordName(name, value) {
    this.setState({ [name]: value })
    value==="gretchen" 
      ? this.setState({ active: 0 }) 
      : this.setState({ active: 1 });
    }

recordRoom(room, value) {
  this.setState({[room]: value})
  if(value==="patio") {
    this.setState({ activeRoom: 0 });
  } else if(value==="bedroom") {
    this.setState({ activeRoom: 1 });
  } else {
    this.setState({ activeRoom: 2 });
  }
};

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
                  <Route exact path="/" component={Home}/> 
                  <Route path="/submit"> 
                    <Submit
                    active={this.state.active}
                    recordName={this.recordName}
                    recordValue={this.recordValue}
                    activeRoom={this.state.activeRoom}
                    recordRoom={this.recordRoom}
                    formSubmitted={this.state.formSubmitted}
                    submitForm={this.submitForm}
                    refreshForm={this.refreshForm}
                    />
                  </Route>
                  <Route path="/library" component={Syllabus}/>
                  <Route path="/bedroom" component={Bedroom}/> 
                  <Route  path="/basement" component={Basement}/>
                  <Route  path="/patio" component={Patio}/> 
                  <Route path="/mancave" component={ManCave}/> 
                  <Route  path="/rock" component={Rock}/>
              </Switch>
        <div className="button-group">
          <Link to="/submit"><button className="button button--add">+</button></Link>
          <Link to="/library"><button className="button button--history">
            <span role="img" aria-label="library">💾</span></button>
            </Link>
          <Link to="/"><button className="button button--house">
            <span role="img" aria-label="home">🏔</span></button>
            </Link>
      </div>
      </div>
      </Router>
    );
  }
}
export default App;
