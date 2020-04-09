import React, { Component, Fragment } from 'react';

class product extends Component {
    render() {
        return (
            <Fragment>
            {
                this.props.product.map((item, index) => 
                <tr key={index}><td>{index + 1}</td><td>{item.productname}</td>
                <td>{item.quantity}</td><td>{item.price}</td></tr>
              )
            }
            </Fragment>
        );
    }
}

export default product;
