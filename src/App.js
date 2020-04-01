import React from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";

class App extends React.Component {
  state = {
    sortAsc: null,
    selectedItem: "Betty",
    removedItems: {},
    filter: "None",
    personalities: ["happy", "greedy", "sad"],
    puppies: [
      {
        name: "Betty",
        rating: 3,
        personality: "happy",
        img:
          "https://cdn1-www.dogtime.com/assets/uploads/2020/01/golden-retriever-corgi-mixed-dog-breed-pictures-1.jpg"
      },
      {
        name: "Rebel",
        rating: 4,
        personality: "greedy",
        img:
          "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12232417/Greyhound-MP.jpg"
      },
      {
        name: "Poppy",
        rating: 1,
        personality: "sad",
        img:
          "https://i.pinimg.com/originals/45/9d/7b/459d7b249bd4c478c365569ebb5e92ab.jpg"
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Header user="Gareth" />
        <p>Puppy of the week is: {this.state.selectedItem}</p>
        <button onClick={() => this.updateSort(this.state.sortAsc)}>
          Sort Items by Rating!
        </button>
        <button onClick={() => this.resetDeleted()}>Reset Deleted</button>

        <select value={this.state.filter} onChange={this.filter}>
          {this.state.personalities.map(personality => {
            return (
              <option key={personality} value={personality}>
                {personality}
              </option>
            );
          })}
          <option key="None" value="None">
            No Filter
          </option>
        </select>

        <List
          list={this.state.puppies}
          selectedItem={this.state.selectedItem}
          removedItems={this.state.removedItems}
          updateSelectedItem={this.updateSelectedItem}
          deleteSelectedItem={this.deleteSelectedItem}
          addMoreStars={this.addMoreStars}
          sortAsc={this.state.sortAsc}
          showImages={true}
          filter={this.state.filter}
        />
      </div>
    );
  }

  updateSelectedItem = newItem => {
    this.setState({ selectedItem: newItem });
  };

  deleteSelectedItem = removeItem => {
    if (this.state.selectedItem === removeItem) {
      this.setState({ selectedItem: "None" });
    }

    let items = this.state.removedItems;
    items[removeItem] = "DELETED";
    this.setState({ removedItems: items });
  };

  updateSort = currentState => {
    this.setState({ sortAsc: !currentState });
  };

  filter = event => {
    this.setState({ filter: event.target.value });
  };

  resetDeleted = currentState => {
    this.setState({ removedItems: {} });
  };

  addMoreStars = item => {
    let newPuppies = this.state.puppies.map(puppy => {
      let newPup = { ...puppy };

      if (puppy.name === item) newPup.rating++;

      return newPup;
    });

    this.setState({ puppies: newPuppies });
  };
}

export default App;

/*
  handleClick = () => {
    this.setState(currentState => {
      return { showImages: !currentState.showImages };
    });
  };
*/
