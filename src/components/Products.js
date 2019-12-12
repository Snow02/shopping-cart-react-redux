import React, {Component} from 'react';

class Products extends Component {

    render() {
        return (
            <section className="section wp-products">
                <h1 className="section-heading product-title">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {/* Product */}
                    {this.props.children}
                </div>
            </section>
        );
    }
}

export default Products;