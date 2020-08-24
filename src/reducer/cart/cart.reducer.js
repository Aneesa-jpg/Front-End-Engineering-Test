import {cartActionTypes} from './cart.types'
import {addItemToCart, removeItemToCart} from './cart.util'
import {DATA} from '../../shop.data'

const cartData = DATA.map(obj => ({ ...obj, "quantity" : 1 }));
console.log(cartData);

const INITIAL_STATE = {
    cartItems : cartData,
    discount : null
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){

        case cartActionTypes.ADD_ITEM : 
            return {
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload)
          };
          case cartActionTypes.REMOVE_ITEM : 
          return {
          ...state,
          cartItems: removeItemToCart(state.cartItems, action.payload)
        };
        case cartActionTypes.CLEAR_ITEM_FROM_CART :
            return{
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                    )
            };
        default: 
            return state;
        } 
}

export default cartReducer;

