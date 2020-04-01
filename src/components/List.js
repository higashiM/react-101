import React from "react";

const List = props => {
  if (props.sortAsc !== null) {
    props.list.sort((a, b) => {
      a = a.rating;
      b = b.rating;
      return props.sortAsc ? a - b : b - a;
    });
  }
  return props.list
    .filter(item => {
      console.log(props.filter);

      return props.filter !== "None"
        ? !props.removedItems[item.name] && item.personality === props.filter
        : !props.removedItems[item.name];
    })
    .map(item => {
      return (
        <ul>
          <li key={item.name}>
            <p>{item.name}</p>
            <p className="rating">{"*".repeat(item.rating)}</p>
            {props.selectedItem === item.name ? (
              <img src={item.img} alt={`${item.name} profile pic`} />
            ) : (
              <button onClick={() => props.updateSelectedItem(item.name)}>
                Select Me!
              </button>
            )}
            <p></p>
            <button onClick={() => props.deleteSelectedItem(item.name)}>
              Delete Me!
            </button>
            <button onClick={() => props.addMoreStars(item.name)}>
              Like Me!
            </button>
          </li>
        </ul>
      );
    });
};

export default List;
