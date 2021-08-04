import React from 'react'
import './Home.css'
import Product from './Product'
function Home(){
 return(
     <div className="home">
         <img className="home_img" alt="" src="/images/home.jpg"/>
     <div className="home_row">
         <Product
         id="111"
         title="HP Laptop"
         price={800.00}
         rating={4}
         image="/images/laptop.jpg"
         />
          <Product
         id="111"
         title="Puma Sneakers"
         price={50.00}
         rating={4}
         image="/images/puma_sneakers.jpeg"
         />
         <Product
         id="111"
         title="Boat Airdopes"
         price={25.00}
         rating={5}
         image="/images/boat_airdopes.jpg"
         />
         <Product
         id="111"
         title="Boat Airdopes"
         price={25.00}
         rating={5}
         image="/images/boat_airdopes.jpg"
         />

     </div>
     <div className="home_row">
          <Product
         id="111"
         title="HP Laptop"
         price={800.00}
         rating={4}
         image="/images/laptop.jpg"
         />
          <Product
         id="111"
         title="Puma Sneakers"
         price={50.00}
         rating={4}
         image="/images/puma_sneakers.jpeg"
         />
         <Product
         id="111"
         title="Boat Airdopes"
         price={25.00}
         rating={5}
         image="/images/boat_airdopes.jpg"
         />
         <Product
         id="111"
         title="Boat Airdopes"
         price={25.00}
         rating={5}
         image="/images/boat_airdopes.jpg"
         />

     </div>
     </div>
     
 )
}
export default Home;