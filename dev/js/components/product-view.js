import React, { Component } from 'react';
import Header from '../containers/header';
import CategoryBar from '../containers/category-bar';
import SizeBoxes from '../containers/size-boxes';

class ProductView extends Component {
  render() {
    return (
      <div>
        <div className='header-div'>
          <Header subtext='The Best and Only of Space' setView={this.props.setView} />
        </div>
        <div>
          <CategoryBar setView={this.props.setView} />
        </div>
        <div className="product">
          <div className="image">
            <img src={'assets/images/' + this.props.product.image} alt="preview" />
          </div>
          <div className="info">
            <h2>{this.props.product.name}</h2>
            <p>{this.props.product.description}</p>
            <div className="price">{this.props.product.price} ₿</div>
            <div>
              <ul className='sizes'>
                <li>Size:</li>
                <li className='size'>
                  <SizeBoxes color='green' squares={9} />
                  <SizeBoxes color='blue' squares={9} />
                  <SizeBoxes color='purple' squares={9} />
                </li>
              </ul>
            </div>
            <div className='order'>
              <input className='product-count' type='number' step='1' defaultValue='100000' min='0' />
              <button>
                <img src='assets/icons/Basket_lightblue.svg' />
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="sidebar">
            <div className="things">
              <div>Teleport Returns Only</div>
              <div>Zero Shipping Time</div>
              <div>No Value Change</div>
            </div>
            <div className="help">
              HAVE A PROBLEM?<br/>
                Ask kiosk assistant Rob Ottinen.
              </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ProductView