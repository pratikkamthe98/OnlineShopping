import React from 'react'
import { Link } from 'react-router-dom'
import './Navlinks.css'
function Navlinks(){
   return(
       <div className="navlinks">
            <div className="navlinks-content">
             <div className="navlinks-content-area">
              <Link>Today's Deal</Link>
              <Link>Top Offers</Link>
              <Link>Electronics</Link>
              <Link>Men</Link>
              <Link>Women</Link>
              <Link>Childrens</Link>
              <Link>Home</Link>
              <Link>Grocery</Link>
              <Link>More</Link>
             </div>
            </div>
       </div>
   )
}
export default Navlinks;