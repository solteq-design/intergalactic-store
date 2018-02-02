import React from 'react';
import TopBar from '../containers/top-bar';
import Header from '../containers/header';
import CategoryBar from '../containers/category-bar';
import WelcomeMessage from '../containers/welcome-message';
import Footer from '../containers/footer';
import MiddleElement from '../containers/middle-element';
import Sunglasses from './sunglasses';
import Spacepets from './spacepets';
import CategoryView from './category-view';
import SpaceGuidance from '../containers/space-guidance';
import SurvivalKit from '../containers/survival-kit';
import ProductView from '../components/product-view';

require('../../scss/style.scss');

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      view: {
        name: "main",
        product: {}
      },
    }
    this.setView = this.setView.bind(this)
  }

  setView(name, product, meta = {}) {
    this.setState({
      view: Object.assign({}, meta, { name, product })
    })
  }

  getProduct() {
    return this.state.view.product;
  }

  renderMain() {
    return <main>
      <div className='header-div'>
        <Header subtext='In Space we are.. and so are you' />
      </div>
      <div>
        <CategoryBar setView={this.setView}/>
      </div>
      <div className="welcome-image">
        <img className="coin" src="assets/images/white-coin-side.png" alt="bitcoin" />
        <img className="quantum" src="assets/images/quantum_opener_free copy.png" alt="quantum opener" />
        <WelcomeMessage className="welcom-message"/>
      </div>
      <div>
        <MiddleElement setView={this.setView} />
      </div>
      <div>
        <SpaceGuidance />
      </div>
      <div>
        <SurvivalKit />
      </div>
    </main>
  }

  renderView() {
    switch (this.state.view.name) {
      case "main":
        return this.renderMain()
      case "product":
        return <ProductView setView={this.setView} product={this.getProduct()}/>
      case "spacepets":
        return <Spacepets setView={this.setView} />
      case "sunglasses":
        return <Sunglasses setView={this.setView} />
      case "categoryview":
        return <CategoryView setView={this.setView} />
    }
  }

  render() {
    return (
      <div>
        <div>
          <TopBar />
        </div>
        {this.renderView()}
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
