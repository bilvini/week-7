import React, { useState } from 'react';

function DynamicList() {
  const [items, setItems] = useState(['Item 1', 'Item 2']);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default DynamicList;