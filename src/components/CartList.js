import React from 'react';

export default function CartList(props) {
  const createEntry = (m) => {
    return (
      <div>
        <p>{m.num}</p>
        <p>{m.text}</p>
        {/* <button onClick={() => props.remove(m.key)}>
          Remove
        </button> */}
      </div>
    );
  };
  const mData = props.m;
  const listM = mData.map(createEntry);
  return <list>{listM}</list>;
}
