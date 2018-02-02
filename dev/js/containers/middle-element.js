import React, { Component } from 'react';

class MiddleElement extends Component {
    constructor(props) {
      super(props)
      this.state = {}
      this.state.products = {
        "spacefoodbar": {
          "image": "spacefoodbar.jpg",
          "name": "Food bar",
          "price": "10",
          "description": "Lorem ipsum dolor sit amet",
          "key": "1"
        },
        "woolsocks": {
          "image": "woolsocks_grey.jpg",
          "name": "Wool socks",
          "price": "30",
          "description": "Lorem ipsum dolor sit amet",
          "key": "2"
        },
        "spaceweapon": {
          "image": "spaceweapon.jpg",
          "name": "Space weapon",
          "price": "0.05",
          "description": "Lorem ipsum dolor sit amet",
          "key": "3"
        },
        "sciencebook": {
          "image": "sciencebook.jpg",
          "name": "Science book",
          "price": "0.9",
          "description": "Lorem ipsum dolor sit amet",
          "key": "4"
        }
      }
    }
    
    viewProduct = name => {
      const props = {name}
      Object.assign(props, this.state.products[name])
      this.props.setView("product", {props})
    }
    
    render() {
        return (
            <div className='middle-element'>
                <div className='pic-links-div'>
                    <ul className='pic-links'>
                        <li><MiddlePicLink image='sunglasses.png' altText='Sunglasses' onClick={() => this.props.setView("sunglasses",{})} linkText='SUNGLASSES' /></li>
                        <li><MiddlePicLink image='moonwalk.jpg' altText='Moonwalk' url='https://www.youtube.com/watch?v=b6pomaq30Gg&feature=youtu.be' linkText='MOONWALK' /></li>
                        <li><MiddlePicLink image='bird.png' altText='Space pet' onClick={() => this.props.setView("spacepets",{})} linkText='SPACE PET' /></li>
                    </ul>
                </div>
                <div className='featured-products-div'>
                    <span className='featured-header'>FEATURED PRODUCTS</span>
                    <ul className='featured-products'>
                        {Object.entries(this.state.products).map(([name, data]) => (
                          <li key={data.key}>
                            <FeaturedProduct
                                image={data.image} name={name} price={`${data.price}`}/>
                          </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

class FeaturedProduct extends Component {
  render() {
      var picSource = 'assets/images/' + this.props.image;

      return (
          <div>
              <ul className='featured-product' onClick={this.props.onClick}>
                  <li><img src={picSource} alt={this.props.altText} /></li>
                  <li className='featured-product-name'>{this.props.name || "Item"}</li>
                  <li className='featured-price'>{this.props.price || "4.2 * 10^9001"} €</li>
              </ul>
          </div>
      );
  }
}

class MiddlePicLink extends Component {
  render() {
      var picSource = 'assets/images/' + this.props.image;
      let url = this.props.url || "javascript:void(0)"

      return (
          <div className='middle-pic-link'>
              <a href={url} onClick={this.props.onClick} target='_blank'><img src={picSource} alt={this.props.altText} />
                  <div className='middle-link'>
                      <span>{this.props.linkText}</span>
                  </div>
              </a>
          </div>
      );
  }
}
export default MiddleElement;