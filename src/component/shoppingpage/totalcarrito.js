import React, { useState } from 'react';
import Galery1 from '../shoppingpage/galeryproductsx2.js';
import Galery2 from '../shoppingpage/galeryproducts.js';

export default function TotalQuantityContainer() {
  const [totalQuantity, setTotalQuantity] = useState(0);

  const updateTotalQuantity = (newTotalQuantity) => {
    setTotalQuantity(newTotalQuantity);
  };

  return (
    <div>
      <Galery1 updateTotalQuantity={updateTotalQuantity} />
      <Galery2 updateTotalQuantity={updateTotalQuantity} />
      <p>Total cantidad: {totalQuantity}</p>
    </div>
  );
}
