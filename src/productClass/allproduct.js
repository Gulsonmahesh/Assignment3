import React, { Component, Fragment} from 'react';
import Productlist from './productlist';


class ShowError extends Component {
  constructor(props) {
    super(props);
    this.state = {error : this.props.error};
  }
  render() {
    return (
      <div style={{display: (this.state.error) ? 'block' : 'none'}} className="alert alert-primary alert-dismissible fade show" role="alert">
        <strong><i className="fas fa-exclamation-triangle"></i> Unable to retrieve Products dur to some Issue</strong>
      </div>
    )
  }
}

class MainProduct extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const tableHeader = ['ID', 'Product Name', 'Quantity', 'Price'];
    return (
      <Fragment>
      <div className="row">
          <div className="col-xs-1-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">Product List</h1>
                  <div className="mt-4 ml-auto">
                    <Productlist header={tableHeader} rows={this.props.rows}/>
                  </div>
                </div>
              </div>
          </div>  
        </div>
    </Fragment>
    )
  }
}

class allproduct extends Component {
  constructor(props) {
    super(props);
    this.state = {products: [],hasError: false};
  }
  async fetchData() {
    await fetch("http://localhost:4000/models")
      .then(res => res.json())
      .then(res => {this.setState({products: res})})
      .catch(err => {this.setState({hasError : true})});
  }
  componentDidMount() {
    this.fetchData();
  }
  componentWillUnmount() {
    this.setState({products :[], hasError: false});
  }
  render() {
    return (
      <Fragment>
        {(this.state.hasError) && <ShowError error={this.state.hasError}/>}  
        {(this.state.products.length>0) && (<MainProduct rows={this.state.products}/>)}
      </Fragment>
    );
  }
}

export default allproduct;