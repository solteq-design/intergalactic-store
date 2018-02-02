//The new collection boxes, show some message and a button
import React, { Component } from 'react';
 
class WelcomeMessage extends Component {
    render() {
        return (
            <div className='welcome-message'>
                <p className='welcome-header'>NEW COLLECTION</p>
                <p className='welcome-content'><b>FASTER THAN EVER!</b></p>
                <button className='shop-now-button' type='button'>SHOP NOW</button>
            </div>
        );
    }
}

export default WelcomeMessage;