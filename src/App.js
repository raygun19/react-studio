import React from 'react';
// import './style.css';
import CartList from './components/CartList';
import { useState } from 'react';
import bakeryData from './assets/bakery-data.json';
import BakeryItem from './components/BakeryItem';

import './App.css';



/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

/* ############################################################## */

function App() {
  const [m, setM] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  const addM = (txt, price) => {
    //event.preventDefault();

    let number = 1;

    if (m.some((item) => item.text === txt)) {
      let mm = [...m];
      const a = mm.find((a) => a.text === txt);
      a.num = a.num + 1;
      setM(mm);
    } else {
      setM([
        ...m,
        {
          num: number,
          text: txt,
          key: Date.now(),
        },
      ]);
    }

    let t = Math.round((total + price) * 100) / 100;
    setTotal(t);
  };

  const removeM = (key) => {
    // setM(m.filter((m) => key != m.key));
  };
  
  return (
    <div id="main">
      <div id="left">
        <h1>My Bakery</h1>

        <div id="items">
          {bakeryData.map(
            (
              item,
              index // TODO: map bakeryData to BakeryItem components
            ) => (
              <BakeryItem
                addM={addM}
                key={item.name}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                index={index}
              ></BakeryItem>
            )
          )}
        </div>
      </div>
      <div id="right">
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        <CartList m={m} remove={removeM} />
        <p>Total: {total}</p>
      </div>
    </div>
  );
};
export default App;
