import React from 'react';

const Sunglasses = props => (
  <div className="sunglasses">
    <p>Error XOXO:</p>
    <h1>You need no<br/>sunglasses here!</h1>
    <a href="javascript:void(0)" onClick={() => props.setView("main")}>Back to the shop</a>
  </div>
)

export default Sunglasses
