import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Notification from './Components/Notification';

class Submit extends Component {

refreshPage() {
    window.location.reload(false);
}

    render() {
        const urlText = this.props.urlText;
        const formText = this.props.formText;
        const active = this.props.active;
        const activeRoom = this.props.activeRoom;
        const formSubmitted = this.props.formSubmitted;

        return(
        <div className="outside canvas">
        <div className="form--wrapper">
            <form className="form" onSubmit={e => {
            e.preventDefault();
            this.props.submitForm('formSubmitted', true);
            }}>
                    {formSubmitted ? 
                    (
                    <div>
                       <Notification/> 
                       <div className="notification--route">
                       <p>Go into the 
                           <strong><Link to="/patio"> patio, </Link></strong>
                           <strong><Link to="/bedroom"> bedroom, </Link></strong> or 
                           <strong><Link to="/basement"> basement.</Link></strong><br/> 

                           Remain in the doorway and <strong><Link to="/submit" onClick={this.refreshPage}>submit again.</Link></strong>
                           </p>
                        </div>
                    </div>
                    ) : (
                        <div className="form--fields">
                                <div className="row name--row">
                                        <label htmlFor="namelist" className="form__label">name:</label>
                                        <ul className="list-names"> 
                                            <li className={active === 0 ? "list-name name--active" : "list-name name"} 
                                            data-id="gretchen" 
                                            onClick={e => this.props.recordName('name', e.target.dataset.id)}>
                                                ga</li>
                                            <li className={active === 1 ? "list-name name--active" : "list-name name"}  data-id="julia"
                                            onClick={e => this.props.recordName('name', e.target.dataset.id)}>
                                                jb</li>
                                        </ul>
                                       
                                </div>

                                <div className="row input--row">
                                        <label htmlFor="input" className="form__label">link:</label>
                                        <div className="input--validation">
                                            <input type="url" name="urlText" className="link__input" 
                                            value={urlText}
                                            onChange={e => this.props.recordValue('urlText', e.target.value)}
                                            placeholder="https://example.com" required/>
                                            <span className="input-msg">
                                                Start links with https://
                                            </span>
                                        </div>
                                </div>
                                
                         
                                <div className="row description--row">
                                        <label htmlFor="formText" 
                                                className="form__label">mood:</label>
                                        <textarea
                                            name="formText" 
                                            className="form__input" 
                                            placeholder="optional thoughts/musings"
                                            value ={formText}
                                            onChange={e => this.props.recordValue('formText', e.target.value)}/>            
                                </div>    

                                <div className="row room--row">
                                    <ul className="list-names">
                                        <li className={activeRoom === 0 ? "name--active" : "name"} 
                                        data-id="patio" 
                                         onClick={e => this.props.recordRoom('room', e.target.dataset.id)}>
                                            patio</li>
                                        <li className={activeRoom === 1 ? "name--active" : "name"} 
                                        data-id="bedroom"
                                         onClick={e => this.props.recordRoom('room', e.target.dataset.id)}>
                                            bedroom</li>
                                        <li className={activeRoom === 2 ? "name--active" : "name"} 
                                        data-id="basement"
                                         onClick={e => this.props.recordRoom('room', e.target.dataset.id)}>
                                            basement</li>
                                    </ul>
                                </div>
                            <div className="button--row">
                                <input 
                                    type="submit" 
                                    className="button--submit"
                                    value="Place" 
                                    />
                            </div>
                     </div> 
        
                     )}
            </form>
        </div>
        </div>
        )
    }
}


export default Submit; 