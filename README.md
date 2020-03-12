# React Day 3 Lecture

### Review
- Create a react app in the directory that you clone
- Create a class based component called `Pets`
- `Pets` will render the text `List of Pets` and a child component called `Dogs`
- The child component `Dogs` should render `<h1>Dogs</h1>`
- Render `Pets` in the browser

### Using Map to Render Elements
- Create an array of dog breeds in the `Dogs` component
- Iterate through the array of dog breeds and render each breed in an h3 tag

### Using State
- In the constructor of `Pets` add `this.state` and set it equal to an empty object
- Define one property of `this.state` as `favDog` and set the value to `"my dog"`
- Render the value of `favDog` as an h3 tag below the list of dogs
- Define a second property of `this.state` as `leastFavDog` and set the value to `"chihuahua"`
- Render the value of `leastFavDog` as an h3 tag below the list of dogs

### Using lifecycle hooks
- Create a class method called `componentDidMount`
- Call `this.setState` in the `componentDidMount` method to update the value of `favDog` to `"your dog"` and `leastFavDog` to `"yorkie"` 