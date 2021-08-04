import React from 'react'
import './Footer.css'
function Footer(){
    return(
        <div className="footer">
            <div className="footer-top">
               <p>Back to Top</p>
             </div>
              <div className="footer-links">
                  <div className="footer-linkrow"> 
                      <span>Link 1</span>
                  </div>
                  <div className="footer-linkrow"> 
                      <span>Link 2</span>
                  </div>
                  <div className="footer-linkrow"> 
                      <span>Link 3</span>
                  </div>
                  <div className="footer-linkrow"> 
                      <span>Link 4</span>
                  </div>              
             </div>
              <div className="footer-links">
                  <div className="footer-linkrow"> 
                      <span>Link 5</span>
                  </div>
                  <div className="footer-linkrow"> 
                      <span>Link 6</span>
                  </div>
                  <div className="footer-linkrow"> 
                      <span>Link 7</span>
                  </div>
                  <div className="footer-linkrow"> 
                      <span>Link 8</span>
                  </div>              
             </div>
        </div>
       
    )
}
export default Footer;