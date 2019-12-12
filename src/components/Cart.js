import React, {Component} from 'react';


class Cart extends Component {
    render() {
        console.log(this.props.children);
        return (
            <section className="section wp-cart">
                <h1 className="section-heading cart">Shopping Cart</h1>
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Sub Total</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/*CartItem*/}
                            {this.props.children}
                            {/*CartResult*/}

                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}

export default Cart;