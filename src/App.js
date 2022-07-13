import ShopingCards from "./ShopingCards";
import './index.css'

function App(){
    return (
        <div>
         <header className="head">
             <h1>E-Shopping</h1>
             <ul class="nav">
    <li class="active">Home</li>
    <li>Search</li>
    <li>Shop</li>
    <li>About</li>
    </ul>
  <button>Sign In</button>
         </header>
        <ShopingCards></ShopingCards>
        
      </div>
    );    
}

export default App;