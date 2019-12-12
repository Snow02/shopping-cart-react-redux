import React, {Component} from 'react';
import {connect} from "react-redux";
import Products from "../components/Products";
import ProductItem from "../components/ProductItem";
import PropTypes from 'prop-types';
import {addToCart, changeMessage} from "../actions";
class ProductContainer extends Component {
    render() {
        // Get all products
        var {listProducts} = this.props;
        // Show products
        var elmProduct = listProducts.map((product, index) => (
            <ProductItem
                key ={index}
                product = {product}
                onAddToCart = {this.props.onAddToCart}
                onChangeMessage = {this.props.onChangeMessage}
            />
        ));

        //
        return (
            <Products>{elmProduct}</Products>
        );
    }
}

// Check Prop Types
ProductContainer.propTypes = {
    listProducts : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            desc : PropTypes.string,
            price : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired
        })
    ).isRequired,

    onChangeMessage : PropTypes.func.isRequired
};
// map
const mapStateToProps = (state) => {
    return {
        listProducts : state.products
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart : (product) => {
            dispatch(addToCart(product,1));
        },
        onChangeMessage : (message) => {
            dispatch(changeMessage(message));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps) (ProductContainer);