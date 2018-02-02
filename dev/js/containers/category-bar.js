//The categories of the top most div of the store front, showing what categories you can buy
import React, { Component } from 'react';
 
class CategoryBar extends Component {
    render() {
        let url = this.props.url || "javascript:void(0)"

        return (
            <div>
                <ul className='category-bar'>
                    <li><a href={url} onClick={() => this.props.setView('categoryview',{})}>PRODUCTS</a></li>
                    <li>FOOD</li>
                    <li>GUIDES</li>
                    <li>TRAVELLING</li>
                    
                    <li className='shopping-cart-icon'>
                        <div className='shopping-cart-container'>
                            <img src='assets/icons/Basket_blackblue.svg' alt='shopping-basket' /> 
                            <div className='cart-text'>1</div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CategoryBar;