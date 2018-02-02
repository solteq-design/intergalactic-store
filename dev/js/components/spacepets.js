import React from 'react';

const Spacepets = props => (
  <div className="spacepets">
    <h1>AWWWWW they are so cute:</h1>
    <a href="javascript:void(0)" onClick={() => props.setView("main")}>Back to the shop</a>
    <br/><br/>
    <div className="images">
      <img className="fullwidth" src='assets/images/spacecat.jpeg' alt='Space cat' />
      <img className="halfwidth margin-sides" src='assets/images/space_dog.png' alt='Space dog' />
      <img className="halfwidth margin-sides" src='assets/images/space_monkey.png' alt='Space monkey' />
      <img className="fullwidth" src='assets/images/bird.png' alt='Bird' />
      <img className="halfwidth" src='assets/images/spacedog2.png' alt='Space dog #2' />
      <img className="halfwidth" src='assets/images/spaceanimals.png' alt='Space animals' />
      <img className="halfwidth" src='assets/images/spacemonkey2.png' alt='Space monkey #2' />
    </div>
  </div>
)

export default Spacepets
