
import { useState } from "react";

var WhishList = () => {
const [buttonText,setButtonText] =useState('WhishList');

function handleClick() {
  setButtonText('Added to wishlist');
}

    return(
        <div>
          <div>
            <button onClick={handleClick}>{buttonText}</button>
          </div>
        </div>
    )
}

export default WhishList;