import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

import { initialItems } from "./data/itemsData";

import { useState } from "react";

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (item) => setItems((prevItems) => [...prevItems, item]);

  const handleDeleteItem = (item) =>
    setItems((prevItems) => prevItems.filter((i) => i.id !== item.id));

  const handleCheckItem = (id) =>
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );

  const handleClear = () => {
    setItems([]);
  };

  return (
    <div className="App">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onCheckItem={handleCheckItem}
        onClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
