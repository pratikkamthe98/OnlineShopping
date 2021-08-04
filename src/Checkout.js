import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import {useStateValue} from './StateProvider'
import ProductCart from './ProductCart'

function Checkout(){

    const[{cart}]=useStateValue();
    return(
        <div className="checkout">
           <div className="checkout_left">
               {
                   cart.length===0?(
                        <div>
                           <h2 className="checkout_title">Your shopping cart is empty.</h2>
                           <p>You have no items in your cart.Buy one</p>
                        </div>
                   ):(
                       <div>
                           <h1 className="carttitle">Your items in the cart</h1>
                           {
                               cart.map(item=>(
                                   <ProductCart
                                      id={item.id}
                                      title={item.title}
                                      image={item.image}
                                      price={item.price}
                                      rating={item.rating}
                                   />
                               ))
                           }
                       </div>
                   )

               }
              
               
           </div>
           {
               cart.length>0 &&(
                    <div className="checkout_right">
                       <Subtotal/>
                    </div>
               )
           }
          
        </div>
    )
}
export default Checkout;