import React from 'react';

const NotFound = () => {
const center = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100vh'
}
    return (
        <div style={center}>
            <h1>404 error</h1>
            <h3>This room of the Cloud Cottage isn't open</h3>
        </div>    
    )
}

export default NotFound;