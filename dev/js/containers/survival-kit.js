import React, { Component } from 'react';

class SurvivalKit extends Component {
    render() {

        return (
            <div className='survival-kit-div'>
                <span>SURVIVAL KIT</span>
                <button><img src='assets/icons/Basket_lightblue.svg' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BUY'EM ALL</button>
                <div className='survival-kit-images'>
                    <img className='large-img' src='assets/images/lightsaber.jpg' alt='Lightsaber' />
                    <div className='small-img-div'>
                        <img className='small-img' src='assets/images/space_book.jpg' alt='Space book' />
                        <img className='small-img' src='assets/images/spaceplane.jpg' alt='Spaceplane' />
                        <img className='small-img' src='assets/images/woolsocks_purple.jpg' alt='Woolsocks' />
                        <img className='small-img' src='assets/images/woodbar.jpg' alt='Woodbar' />
                        <img className='small-img' src='assets/images/tent.jpg' alt='Tent' />
                    </div>
                </div>
            </div>
        );
    }
}
export default SurvivalKit;