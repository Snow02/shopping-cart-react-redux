import React, {Component} from 'react';
import {connect} from "react-redux";
import Cart from "../components/Cart";
import PropTypes from 'prop-types';
import {MSG_CART_EMPTY} from "../constants/Messages";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import {changeMessage, deleteProductInCart, updateQuantityProductInCart} from "../actions";

class CartContainer extends Component {
    // Show Item Cart
    showCartItem = (listCart) => {
        let result = <tr><td className="cart-empty">{MSG_CART_EMPTY}</td></tr>;
        if(listCart.length > 0) {
            result = listCart.map((item, index ) => (
                 <CartItem
                     key={index}
                     item={item}
                     stt={index+1}
                     onDeleteProduct = {this.props.onDeleteProductInCart}
                     onChangeMessage = {this.props.onChangeMessage}
                     onUpdateQuantity = {this.props.onUpdateQuantityProductInCart}
                 />
            ));
        }
        return result;
    };
    // Show total amount cart
    showTotalAmount = (listCart) => {
        var result = null;
        if(listCart.length > 0) {
            listCart.map((item) =>(
                result += item.product.price * item.quantity
            ));
        }
        return result ;
    };

    render() {
        var {listCart} = this.props;
        return (
            <Cart>
                {this.showCartItem(listCart)}
                <CartResult
                    total = {this.showTotalAmount(listCart)}
                />
            </Cart>

        );
    }
}


// Check Prop Types
CartContainer.propTypes = {
    listCart: PropTypes.arrayOf(
        PropTypes.shape({
            // list Cart :  product + quantity
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                desc: PropTypes.string,
                price: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,

            quantity: PropTypes.number.isRequired
        })
    ).isRequired,


};
// map
const mapStateToProps = (state) => {
    return {
        listCart: state.cart,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart : (idProduct) => {
              dispatch(deleteProductInCart(idProduct));
        },
        onChangeMessage : (message) => {
            dispatch(changeMessage(message));
        },
        onUpdateQuantityProductInCart : (product, quantity) => {
            dispatch(updateQuantityProductInCart(product, quantity));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);