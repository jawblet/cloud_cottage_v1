import React, { Component } from 'react';

class Notification extends Component {
    constructor(props){
        super(props)
        console.log(props);
    }
    render () {
        return (
            <div className="notification--all">
                <div className="notification notification--success">
                    <div className="notification--top">
                        <h2>this is just to confirm</h2>
                    </div>
                    <div className="notification--text">
                        <h4>you've put something down and it will be in the same spot when you come back.</h4>
                        </div>
                </div>
            </div>
    )

    }

}

export default Notification;