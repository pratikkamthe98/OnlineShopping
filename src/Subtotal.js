import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider'
function Subtotal(){

     const getCartTotal=(cart) =>
     cart?.reduce((amount,item)=>item.price+amount,0)
     const [{cart},dispatch]=useStateValue();
     return(
      <div className="subtotal">
       <CurrencyFormat
       renderText={(value)=>(
           <p>
               Subtotal({cart.length} items):<strong>{`${value}`}</strong>
           </p>
       )

       }
       decimalScale={2}
       value={getCartTotal(cart)}
       displayType={"text"} 
       thousandSeparator={true}
       prefix={"$"}
       />
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
     )
}
export default Subtotal;