import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <div className='header'>
                <div className='headerbutton-div'>
                    <HeaderButton label='BTC' />
                    <a href='https://coinmill.com/BTC_EUR.html'>See Exchange rate</a>
                </div>
                <div className='headerbutton-div'>
                    <HeaderButton label="ENGLISH" />
                </div>
                <HeaderText subtext={this.props.subtext} onClick={() => this.props.setView('main', {})}/>
                <div>
                    <HeaderLogin />
                </div>
                <div>
                    <HeaderSearch />
                </div>
            </div>
        );
    }
}

class HeaderText extends Component {
    render() {
        let url = this.props.url || "javascript:void(0)"
        return (
            <div className='headertext'>
                <ul>
                    <li className='shopname'><a href={url} onClick={this.props.onClick}>Galaxy Shop</a></li>
                    <li className='subheader'>{this.props.subtext}</li>
                </ul>
            </div>
        )
    }
}

class HeaderSearch extends Component {
    render() {
        return(
            <form>
                <input className='headersearch' type='text' placeholder='Search entire store'/>
            </form>
        )
    }
}

class HeaderLogin extends Component {
    render() {
        return (
            <div className='login-div'>
                <div className='welcometext-div'>
                    <span className='welcometext'>Welcome stranger!</span>
                </div>
                <div className='userpic-div'>
                    <img src='assets/icons/User.svg' alt='User pic' />
                </div>
                <div className='loginlinks'>
                    <ul>
                        <li><a>SIGN IN</a></li>
                        <li><a>CREATE AN ACCOUNT</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

class HeaderButton extends Component {
    render() {
        return (
            <button className='headerbutton'>{this.props.label}</button>
        );
    }
}

export default Header;