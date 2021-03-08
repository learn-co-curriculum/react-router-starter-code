# Component-Lifecycle-Methods

## SWBATs
* Identify why we fetch data using ComponentDidMount
* Write methods that interact with data at different points throughout a component's life

## Outline

     5m Show Parent & Child Lifecycles
    10m ComponentDidMount for Fetch Requests
     5m ComponentWillUnmount
    10m ComponentDidUpdate
    ===
    30m Total

### Lifecycle Methods

[Docs](https://reactjs.org/docs/react-component.html#the-component-lifecycle)

[React Lifecycle Methods Diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

- *constructor(props)*
- *render()*
- *componentDidMount()*
- *componentDidUpdate()*
- *componentWillUnmount()*

#### Birth (Mounting)
- *constructor()*
  - called before it is mounted
- *render()*
  - called after mounting and updating
- *componentDidMount()*
  - invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

#### Life (Updating)
- *render()*
  - called after mounting and updating
- *componentDidUpdate(prevProps, prevState)*
  - invoked immediately after updating occurs. This method is not called for the initial render

#### Death (Unmounting)
- *componentWillUnmount()*
  -  invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().

### Show Parent & Child Lifecycles

* Add `console.log` inside constructor() and render() and show console prints

```js
//App.js

constructor(){
    console.log("APP: Constructor")
    ...
}

render(){
  console.log("APP: Render")
  ...
}
```
### ComponentDidMount for Fetch Requests

* Create `componentDidMount()` inside App component. Add `console.log` and `fetch` painting data from json-server. 

* Explain: ComponentDidMount for Fetch Requests

```js
//App.js
componentDidMount(){
  console.log("APP: ComponentDidMount")

  fetch("http://localhost:3000/paintings")
  .then(res => res.json())
  .then(paintings => this.setState({ paintings })) //explain paintings is same as paintings: paintings
}
```

### ComponentWillUnmount

* Explain how method is invoked when `PaintingForm` component is unmount because of conditional rendering.

```js
//PaintingForm.js

componentWillUnmount(){
  console.log("PaintingForm: ComponentWillUnmount")
}
```

### ComponentDidUpdate

* Explain how method is invoked when `votes` state is changing for `Painting` component

* Watch out for infinite loops if setting state!

```js
//Painting.js

componentDidUpdate(prevProps, prevState){
  console.log("Painting: ComponentDidUpdate")

  // we access props with this.props
  // and state with this.state
  
  // prevState contains state before update
  // prevProps contains props before update

  if(prevState.votes < this.state.votes){
    console.log("Painting got a new vote!")
  }
} 
```




