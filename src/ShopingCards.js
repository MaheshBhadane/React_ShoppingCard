function ShopItems(){
    return (
     <>
      <h1>Fashion</h1>
     <div className="cardContainer">
     <div className="card">
     <img src="./images/image1.jpg" alt=""/>
      <p>Blue T-shirt</p>
      <h3>₹500 <strike>₹1000</strike> 55% off</h3>
     </div>
 
     <div className="card">
     <img src="./images/image2.jpg" alt=""/>
      <p>Boys Track</p>
      <h3>₹600 <strike>₹1100</strike> 67% off</h3>
     </div>
 
     <div className="card">
     <img src="./images/image3.jpg" alt=""/>
      <p> Boys T-shirt</p>
      <h3>₹1000 <strike>₹3000</strike> 70% off</h3>
     </div>
 
 
     </div>
 </>
    )
 }
 
 export default ShopItems;