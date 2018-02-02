import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className='paymenticons'>
                    <img src='assets/icons/bitcoin_accepted.svg' alt='Bitcoin accepted' />
                    <img src='assets/icons/visa_accepted.svg' alt='Visa accepted' />
                </div>
                <p>Here is some very important footer texts like address</p>
            </footer>
        );
    }
}
export default Footer;