import React, { Component } from 'react';
import classNames from 'classnames';

class SizeBoxes extends Component {
    render() {
        let boxes = [];
        for (let i = 0; i < this.props.squares; i++) {
            boxes.push(<SizeBox key={i} color={this.props.color} />);
        }
        return(
            <div>
                {boxes}
            </div>
        )
    }
}

class SizeBox extends Component {
    render() {
        return (
            <div className={classNames(this.props.color, 'size-box')}></div>
        )
    }
}

export default SizeBoxes;