import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

// function ShoppingList({ items }) {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   function handleCategoryChange(event) {
//     setSelectedCategory(event.target.value);
//   }

//   const itemsToDisplay = items.filter((item) => {
//     if (selectedCategory === "All") return true;

//     return item.category === selectedCategory;
//   });

//   return (
//     <div className="ShoppingList">
//       <ItemForm />
//       <Filter onCategoryChange={handleCategoryChange} />
//       <ul className="Items">
//         {itemsToDisplay.map((item) => (
//           <Item key={item.id} name={item.name} category={item.category} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ShoppingList;
function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(newSearchText) {
    setSearchText(newSearchText);
  }

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]); // Assuming setItems is a state updater function
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" || selectedCategory === item.category) {
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    }
    return false;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
