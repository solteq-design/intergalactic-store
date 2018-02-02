import React, { Component } from 'react';

class CategorySortBottom extends Component {
    render() {
        return (
            <div className='category-sort-bottom'>
                <ul className='left-side-bottom'>
                    <li className='show-select-label'><label htmlFor="show-select">Show:</label></li>
                    <li className='show-input'>
                        <select >
                            <option>6</option>
                            <option>12</option>
                            <option>24</option>
                        </select>
                    </li>
                </ul>
                <ul className='right-side-bottom'>
                    <li className='selected'>1</li>
                    <li>2</li>
                    <li>></li>
                </ul>
            </div>
        );
    }
}

export default CategorySortBottom;