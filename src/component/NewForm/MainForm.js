import React, { useState } from "react";


import "./MainForm.css";

const MainForm = () => {
    const [enteredImage, setEnteredImage]= useState('');

    const [enteredTitle, setEnteredTitle] = useState('');
  
    const [enteredDesc, setEnteredDesc]= useState('');

    const [enteredPrice, setEnteredPrice]= useState('');

    const imageChangehandler= (event) => {
        setEnteredImage(event.target.value);

        /*if(event.target.name==="img"){
            var fread= new FileReader()
            fread.readAsDataURL(event.target.files[0]);
      fread.onloadend = function(event){
          setEnteredImage(event.target.result);
      }
    }
          */

      };

    const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const descChangeHandler= (event) =>{
    setEnteredDesc(event.target.value);
  };

  const priceChangeHandler= (event) => {
    setEnteredPrice(event.target.value);
  };

  
  const submitHandler = (event) =>{

    event.preventDefault();

    const itemData={
      image: enteredImage,

      title: enteredTitle,

      desc: enteredDesc,

      price: enteredPrice,
 
    };
    console.log(itemData);
  };


  return (
    <form onSubmit={submitHandler}>
      <div className="new-form__controls">
        <div className="new-form__control">
          <label> Image </label>
          <input type="file" onChange={imageChangehandler}/>
        </div>
        <div className="new-form__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-form__control">
          <label>Description</label>
          <input type="text" onChange={descChangeHandler}/>
        </div>
      
        <div className="new-form__control">
          <label>Amount</label>
          <input type="number" onChange={priceChangeHandler} />
        </div>
        </div>
      <div className="new-form__control">
        <button type="submit">Add Item</button>
      </div>
    </form>
  );
};

export default MainForm;