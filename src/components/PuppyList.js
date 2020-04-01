import React from "react";

const List = props => {
  if (props.sortAsc !== null) {
    props.list.sort((a, b) => {
      a = a.rating;
      b = b.rating;
      return props.sortAsc ? a - b : b - a;
    });
  }

  return (
    <ul>
      {props.list.map(item => {
        return (
          <li key={item.name}>
            <p>{item.name}</p>

            {props.selectedItem === item.name && (
              <img src={item.img} alt={`${item.name} profile pic`} />
            )}

            <button onClick={() => props.updateSelectedPup(item.name)}>
              Make ME the selected pup!
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
