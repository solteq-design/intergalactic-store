import React, { Component } from 'react';
import Slider, { Range } from 'rc-slider';
import '../../../node_modules/rc-slider/assets/index.css';
import SizeBoxes from '../containers/size-boxes';

class CategorySidemenu extends Component {
    render() {
        return (
            <div className='category-sidemenu'>
                <ul>
                    <li className='purpose'>
                        <span>PURPOSE</span>
                        <button>∨</button>
                    </li>
                    <li className='price-range'>
                        <span>PRICE</span>
                        <Range min={0} max={1000} count={2} allowCross={false} defaultValue={[400,800]}/>
                    </li>
                    <li className='size'>
                        <span>SIZE</span>
                        <SizeBoxes color='green' squares={4}/>
                        <SizeBoxes color='blue' squares={4}/>
                        <SizeBoxes color='purple' squares={4}/>
                        <SizeBoxes color='green' squares={4}/>
                        <SizeBoxes color='blue' squares={4}/>
                        <SizeBoxes color='purple' squares={4}/>
                        <SizeBoxes color='purple' squares={4}/>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CategorySidemenu;