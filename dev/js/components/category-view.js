import React from 'react';
import Header from '../containers/header';
import CategoryBar from '../containers/category-bar';
import CategorySidemenu from '../containers/category-sidemenu';
import CategorySort from '../containers/category-sort';
import CategoryItems from '../containers/category-items';
import CategorySortBottom from '../containers/category-sort-bottom';

const CategoryView = props => (
        <div>
            <div className='header-div'>
                <Header subtext='The Best and Only of Space' setView={props.setView}/>
            </div>
            <div>
                <CategoryBar setView={props.setView} />
            </div>
            <div className='category-div'>
                <CategorySidemenu />
                <div>
                <CategorySort />
                <CategoryItems setView={props.setView}/>
                <CategorySortBottom />
                </div>
            </div>
        </div>
);

export default CategoryView;