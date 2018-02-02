import React, { Component } from 'react';


class CategoryItems extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.state.products = {
            "WOOL SOCKS": {
                "image": "woolsocks_colorful.png",
                "name": "WOOL SOCKS",
                "price": "0,003",
                "description": "Lorem ipsum dolor sit amet",
            },
            "SILVER LEMBAS": {
                "image": "lembas_silver.jpg",
                "name": "SILVER LEMBAS",
                "price": "99,99",
                "description": "Lorem ipsum dolor sit amet",
            },
            "LEMBAS": {
                "image": "Lembas.jpg",
                "name": "LEMBAS",
                "price": "10",
                "description": "Lorem ipsum dolor sit amet",
            },
            "LIGHTSABER BLUE": {
                "image": "lightsaber_blue.jpg",
                "name": "LIGHTSABER BLUE",
                "price": "1,99",
                "description": "Lorem ipsum dolor sit amet",
            },
            "LIGHTSABER GREEN": {
                "image": "lightsaber_green.jpg",
                "name": "LIGHTSABER GREEN",
                "price": "4",
                "description": "Lorem ipsum dolor sit amet",
            },
            "GREENY WOOL SOCKS": {
                "image": "woolsocks_greeny.jpg",
                "name": "GREENY WOOLSOCKS",
                "price": "0,0003",
                "description": "Lorem ipsum dolor sit amet",
            }
        }
    }

    render() {
        let i = 0;
        return (
            <div className='products-div'>
                <ul className='products'>
                    {Object.entries(this.state.products).map(([name, data]) => (
                        <li key={i++}>
                            <CategoryItem
                                setView={this.props.setView}
                                image={'assets/images/' + data.image}
                                productName={name} 
                                productPrice={`${data.price} ₿`} 
                                productDesc={data.description} 
                                product={data}/>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

class CategoryItem extends Component {
    render() {
        return (
            <div>
                <ul onClick={() => this.props.setView('product',this.props.product)}>
                    <li><img src={this.props.image} /></li>
                    <li className='product-name'>{this.props.productName}</li>
                    <li className='product-price'>{this.props.productPrice}</li>
                    <li className='product-sale-price'>{this.props.productSalePrice}</li>
                    <li className='product-desc'>{this.props.productDesc}</li>
                </ul>
            </div>
        )
    }
}

export default CategoryItems;