import React from "react";

function List() {
  const items = ["apple", "banana", "orange", "pear", "grape"];

  return (
    <div>
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

export default List;
