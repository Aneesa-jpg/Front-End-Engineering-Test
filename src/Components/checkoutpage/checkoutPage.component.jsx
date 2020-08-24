import React from 'react'
import CheckoutItem from '../Checkout-item/checkout-item.component';
import {connect} from 'react-redux';
import {selectCartItems,selectCartTotal, selectDiscount} from '../../reducer/cart/cart.selctors';
import {createStructuredSelector} from 'reselect';
import './checkoutpage.styles.css'

const CheckoutPage = ({cartItems,total,discount}) => {
    return (

        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>    
            
           
                    {
                        cartItems.map(cartItem =>  (  <CheckoutItem key={cartItem.id} cartItem={cartItem} /> ) )
                    }
                
                <div className='total'>
                    <span>Total : ${total}</span>
                </div>
                <div className='total'>
                    <span>Discount : ${discount}</span>
                </div>
                <div className='total'>
                    <span>Order Total : ${discount}</span>
                </div>
                
            
            
        </div>
    )
}

const matchStateToProps = () => createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal,
    discount: selectDiscount
}
)

export default connect(matchStateToProps)(CheckoutPage)
