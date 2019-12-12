// add product to cart
import {
      ADD_TO_CART,
      CHANGE_MESSAGE,
      DELETE_PRODUCT_IN_CART,
      UPDATE_QUANTITY_PRODUCT_IN_CART
} from "../constants/ActionTypes";

export const addToCart = (product, quantity) => {
      return {
            type : ADD_TO_CART,
            product : product,
            quantity : quantity,

      }
};

// Change message
export const changeMessage = (message) => {
      return {
            type : CHANGE_MESSAGE,
            message : message
      }
};

// Delete product in cart
export const deleteProductInCart = (idProduct) => {
      return  {
            type : DELETE_PRODUCT_IN_CART,
            idProduct : idProduct
      }
};

// Update quantity product cart
export const updateQuantityProductInCart = (product, quantity) => {
      return {
            type : UPDATE_QUANTITY_PRODUCT_IN_CART,
            product : product,
            quantity : quantity,
      }
};