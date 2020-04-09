import React, { Component, Fragment} from 'react'
import Product from './product';

export default class productlist extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <table className="table table-striped table-dark table-responsive table-bordered table-responsive">
                <thead>
                <tr>
                    { this.props.header.map((heading, index) => <th key={index}>{heading}</th>) }
                </tr>
                </thead>
                <tbody>
                    <Product product={this.props.rows} />
                </tbody>
            </table>
        )
    }
}
