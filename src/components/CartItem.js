import React, {Component} from 'react';
import {MSG_DELETE_PRODUCT_IN_CART_SUCCESS, MSG_UPDATE_CART_SUCCESS} from "../constants/Messages";

class CartItem extends Component {

    // Handle Delete Product
    onDeleteProduct = (idProduct) => {
        this.props.onDeleteProduct(idProduct);
        this.props.onChangeMessage(MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    };

    // Handle update quantity
    onUpdateQuantity = (product , quantity) => {
        // if quantity > 0 => handle click + - quantity
        if(quantity > 0 ){
            this.props.onUpdateQuantity(product, quantity);
            this.props.onChangeMessage(MSG_UPDATE_CART_SUCCESS);
        }
    };

    render() {
        const {item , stt} = this.props;
        return (
            <tr>
                <td>{stt}</td>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>
                    <div className="thumb">
                        <img src={item.product.image} alt="LOL" />
                    </div>

                </td>

                <td>${item.product.price}</td>
                <td className="center-on-small-only">

                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary  btn-rounded waves-effect waves-light"
                               onClick={() => this.onUpdateQuantity(item.product , item.quantity -1 )}
                        >
                            <a>—</a>
                        </label>
                        <span className="qty"> {item.quantity} </span>
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                               onClick={() => this.onUpdateQuantity(item.product , item.quantity +1 )}
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>${item.product.price * item.quantity}</td>
                <td>
                    <button type="button"
                            className="btn btn-sm btn-primary waves-effect waves-light"
                            data-toggle="tooltip" data-placement="top"
                            data-original-title="Remove item"
                            onClick={() => this.onDeleteProduct(item.product.id)}
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }
}

export default CartItem;