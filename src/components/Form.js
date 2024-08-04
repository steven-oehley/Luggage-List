import { useState, useRef } from "react";

import { v4 as uuidv4 } from "uuid";

function Form({ onAddItem }) {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const itemDescRef = useRef(null);

  const resetForm = () => {
    setQuantity(1);
    setItem("");
    itemDescRef.current.focus();
  };

  function handleSubmit(e) {
    e.preventDefault(); // prevent default

    onAddItem({ id: uuidv4(), description: item, quantity, packed: false }); // add new item

    // reset form
    resetForm();
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        onChange={({ target }) => setQuantity(+target.value)}
        value={quantity}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((arrIndex) => (
          <option value={arrIndex} key={arrIndex}>
            {arrIndex}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item to pack...."
        value={item}
        onChange={({ target }) => setItem(target.value)}
        ref={itemDescRef}
        required
      />
      <button>add</button>
    </form>
  );
}
export default Form;
