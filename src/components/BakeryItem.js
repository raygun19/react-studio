import React from 'react';



const BakeryItem = (props) => {
  return (
    <div>
      <img src={props.image} alt="bakery item" />
      <p>{props.name}</p>
      <p>{props.description}</p>
      <p>{props.price}</p>

      <button
        onClick={(e) => {
          props.addM(props.name, props.price);
          e.preventDefault();
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default BakeryItem;
