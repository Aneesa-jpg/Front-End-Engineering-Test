import React from 'react'
// import {DATA} from '../../shop.data'

import {connect} from 'react-redux';
import {clearItemFromCart, addItem, removeItem} from '../../reducer/cart/cart.actions'
import './checkout.styles.css'

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {name, price, quantity} = cartItem;
    return (
        <div className='checkout-item'>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={ () => removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={ () => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}> 
                &#10005; 
            </div>
            
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
  });
  
  
  export default connect(null,mapDispatchToProps)(CheckoutItem)