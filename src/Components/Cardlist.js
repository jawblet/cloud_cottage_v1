import React from 'react';
import { Route } from 'react-router-dom';
import Card from './Card';

const Cardlist = ({ form, match }) => {
    
    return (
    <div className="cardlist">
        <Route path = '/:room'
            render = {props => (
            <Card
            component = {
                Array.from(form).filter(
                    submission => submission.room === props.match.params.id
                )[0]
            } match = {match}
            />
            )}
            />
    </div>
    )
}

export default Cardlist;