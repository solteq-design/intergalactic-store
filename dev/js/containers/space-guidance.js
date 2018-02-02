import React, { Component } from 'react';

class SpaceGuidance extends Component {
    constructor() {
        super();
        this.state = {
            backgroundPos: 600
        }
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount = function() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount = function() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = function(event) {
        let scrollPos = window.scrollY;
        this.setState({ backgroundPos: 600 + (-scrollPos / 3) });
    }

    render() {
        let backgroundStyle = {
            backgroundPosition: '0 ' + this.state.backgroundPos + 'px'
        };
        return (
            <div className='space-guidance-div'>
                <div className='black-space'></div>
                <div className='space-sky' style={backgroundStyle}></div>
                <div className='space-guidance'>
                    <ul>
                        <li className='space-guidance-text'>
                            SPACE GUIDANCE CATS
                        </li>
                        <li className='miaw'>
                            MIAWWW!
                        </li>
                        <button className='space-guidance-button'>
                            SEE MORE
                        </button>
                    </ul>
                </div>
            </div>
        );
    }
}
export default SpaceGuidance;