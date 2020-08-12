import React, {Component} from 'react';

class Card extends Component {
constructor(props) {
    super(props) 
    console.log(props);
}

render() {
    const name = this.props.name;
    const urlText = this.props.urlText;
    const formText = this.props.formText;
    const room = this.props.room;
    const formSubmitted = this.props.formSubmitted;

    return(
    <div>
        {formSubmitted && 
        <a target="_blank" href={urlText} rel="noopener noreferrer"> 
        <div className="card">
            <div className="card__border">
                </div>
                <span className="card__wrapper">
                    <h3 className="card__title">
                        {name} left this here for {name === 'gretchen' ? 'julia' : 'gretchen'} 
                    </h3>
                    <p className="card__description"> She said: {formText} </p>
                    <p className="card__description"> It belongs in the {room} </p>
                </span>
            <footer className="card__footer">
            </footer>
          </div>
        </a>
        }
    </div>
        )
}
}
export default Card;