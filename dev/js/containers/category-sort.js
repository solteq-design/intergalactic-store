import React, { Component } from 'react';

class CategorySort extends Component {
    render() {
        return (
            <div className='category-sort'>
                <ul className='left-side'>
                    <li className='sort-select-label'><label htmlFor='sort-input'>Sort By:</label></li>
                    <li>
                        <select className='sort-input'>
                            <option>Name</option>
                            <option>Lowest Price</option>
                            <option>Highest Price</option>
                        </select>
                    </li>
                    <li className='arrow-icon'><img src='assets/icons/ic_arrow_upward_black_24px.svg' /></li>

                </ul>
                <ul className='right-side'>
                    <li className='show-select-label'><label htmlFor="show-select">Show:</label></li>
                    <li className='show-input'>
                        <select >
                            <option>6</option>
                            <option>12</option>
                            <option>24</option>
                        </select>
                    </li>
                    <li className='first-sort-icon'><img src='assets/icons/ic_apps_black_24px.svg'/></li>
                    <li className='second-sort-icon'><img src='assets/icons/ic_menu_black_24px.svg'/></li>
                </ul>
            </div>
        );
    }
}

export default CategorySort;