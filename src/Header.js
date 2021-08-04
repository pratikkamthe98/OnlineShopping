import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import {Link} from 'react-router-dom'
import  ShoppingBasketIcon  from  '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'

function Header(){
    const [{cart},dispatch]=useStateValue();
    console.log(cart);
    return(
        <nav className="header">
            <img className="header_logo" src="/images/logo.jpg" alt="Logo"/>
           
            <div className="header_search">
                <input type="text" className="header_searchinput"/>
                <SearchIcon className="header_searchicon"/>
            </div>
            <div className="header_nav">
          <Link to="/" className="header_link">
            <div className="header_navitem">
                <span className="header_navitem_one">Hello User</span>
                 <span className="header_navitem_two">Sign</span>
            </div>
          </Link>
           <Link to="/" className="header_link">
            <div className="header_navitem">
                <span className="header_navitem_one">Returns</span>
                 <span className="header_navitem_two">& Orders</span>
            </div>
          </Link>
          </div>
          <Link to="/checkout" className="header_link">
              <div className="header_navitem_cart">
                  <ShoppingBasketIcon/>
                  <span className="header_navitem cart_productcount">{cart.length}</span>
              </div>
          </Link>
        </nav>
    )
}

export default Header;