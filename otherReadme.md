# React List

## Section 1: Functional Components and props

### Quiz

Consider the code snippet below:

```js
const App = () => {
  return (
    <div>
      <Sum num1={5} num2={6} />
      <Sum num1={4} num2={2} />
    </div>
  );
};

const Sum = () => {
  return <p>[NUMBER 1] + [NUMBER 2]</p>;
};
```

1. Consider the code above where we have our App functional component and a Sum functional component. What relationship would you say the App is to the Sum?

2. In the App we're passing different information into the Sum component. Why have we had to use {} brackets to send the numbers down - `num1={5}` for example?

//in order to use jsx to evaluate the value?

3. From inside our Sum component, where do we have access to the `num1` and `num2` being passed in?

4) When rendering a list of items, why can we only do a `map` and not a `forEach`?

//need to return an array

5. Why do we need to include `import React from 'react'` at the top of each of our component files like App.js?

//so it know to use jsx

6. Where would a 'Each React child needs a unique key' error come from and how could we solve it?

//add a key to each item

### Mini tasks

1. Make a user variable in the App that you display in the Header component: '[user here]'s Puppies'

2. Add a cuteness rating to the puppies and display that alongside their name

3. Extract the list of puppies into its own List component

4. Add a button next to the header that triggers a `console.log` of 'Hello [user here]' when clicked.

5. Add a list of kittens - bonus points if you reuse the list component (not making a separate 'KittenList' and 'PuppyList')

## Section 2: Classes and State

### Quiz continued...

Consider the snippet below:

```js
class App extends React.Component {
  state = {
    counter: 0
  };

  render() {
    return (
      <div>
        <p>Count: {counter}</p>
        <button onClick={this.incrementCount}>Increase counter</button>
      </div>
    );
  }

  incrementCount = () => {
    // want to update the counter in state here
  };
}
```

1. Running the above code, we get an ReferenceError saying '`counter` is not defined'. Why is `counter` not defined? How should we refer to the `counter` variable from inside the render?

2. I want to increase the counter by 1 with every click of a button. If I try to update something in state directly like this: `this.state.counter++`, I will mutate the state but won't see it update on the page. What do I need to do to properly update a value in state?

3. What does `setState` trigger?

4. I want to take the value in state and increase it by one. Should I invoke `setState` with an object or a function?

### Mini tasks continued...

1. Add a 'sort by cuteness' button that re-orders the puppies

2. Add functionality to remove a puppy from the list

3. Add functionality to upvote a puppy's cuteness ranking

4. Give the puppies personalities (e.g `personalities: ['happy', 'excitable']` in the pup object) and having a drop
   down/buttons etc that filters list to show puppies by personality

5. let us know if you've got this far and we'll give some more fun tasks for you to do!
