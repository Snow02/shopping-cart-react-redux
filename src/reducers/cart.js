import {ADD_TO_CART, DELETE_PRODUCT_IN_CART, UPDATE_QUANTITY_PRODUCT_IN_CART} from "../constants/ActionTypes";
var data = JSON.parse(localStorage.getItem('CART'));

var initialState = data ? data : [];


// Find index products already in the cart
let findProductInCart = (cart, product) => {
    let  temp = -1;
    if(cart.length > 0) {
        cart.map((item,index) => {
            if(item.product.id === product.id){
                temp = index;
            }

        });
    }
    return temp;
};
// Find Product in Cart by Id
let findProductInCartById = (cart, id) => {
    let  temp = -1;
    cart.map((item,index) => {
        if(item.product.id === id){
            temp = index;
        }
    });

    return temp;
};
//

var myReducer = (state = initialState , action) => {
    switch (action.type) {
        //
        case ADD_TO_CART : {
            let {product, quantity} = action;
            let index = -1;
             index = findProductInCart(state, product);
             // console.log(index); // 0  // 1 // 2 ...
             if(index !== -1){
                 state[index].quantity += quantity;
             }
             else{
                 state.push({
                     product ,
                     quantity
                 });
             }
            localStorage.setItem("CART" , JSON.stringify(state));

            return [...state];
        }
        //

        case DELETE_PRODUCT_IN_CART : {
            let index = -1; // find no found
            index = findProductInCartById(state , action.idProduct);
            if(index !== -1 ){
                state.splice(index,1);
            }
            localStorage.setItem("CART", JSON.stringify(state));
            return [...state];
        }

        //
        case UPDATE_QUANTITY_PRODUCT_IN_CART : {
            let index = -1;
            console.log(action);
            index =findProductInCart(state, action.product);
            if(index !== -1){
                state[index].quantity = action.quantity;
            }
            localStorage.setItem("CART" , JSON.stringify(state));
            console.log(index);
            return [...state];
        }

        //
        default : {
            return [...state];
        }
    }
};

export default myReducer;