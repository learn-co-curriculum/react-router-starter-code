# React Router

## SWBATs
* Understand how **client side routing** works
* Create **a new route** from one component to another component
* Send **router-props and props** through the new route
* Use **<Link/>** and **history.push()** to go to different route

## Resources
* [React Router Quickstart](https://reacttraining.com/react-router/web/guides/quick-start)
* [Learn's Intro to Client-Side Routing](https://github.com/learn-co-curriculum/react-introduction-to-react-router)
* [A Simple React Router v4 Tutorial](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)

## Outline

    10m Theoretical Prerequisites
    5m But what does React Router Actually Do?
    5m Setup and Components
    25m Using the Router Components
    ===
    45m Total

### Theoretical Prerequisites

##### Static vs. Dynamic Routing

Static routing is what we're used to with Rails. Basically, we define the routes beforehand, and then render their actions separately.

React Router is Different. Basically, the app "renders" routes _while_ rendering all of the JSX. This means no external `routes.*` configuration.

##### Client-side routing

Now that the React stack is handling routing, that means none of our routes require a new `GET` request to the backend to get that page's HTML. This allows us to enforce the "Single Page App", since we can render the new route's page without refreshing.

##### Why do we even need routes?

* The user can use forward/back to navigate your app
* The user can navigate via urls
* We can make urls describe the action that the user might be taking

##### What are the drawbacks to client-side routing?

* We're loading all of our frontend at once, so it might add to the initial load time
* We have to design all of our routes to be coupled with our component structure (which can be a good thing long-term)

### But what does React Router Actually Do?

Ultimately, we're still in a Single-Page application. Show that you can use vanilla JS to change the route in the terminal using the following commands.

### Setup and Components

You can use `create-react-app` in conjunction with `react-router`, just install with `npm install react-router-dom`.

Now, we can add the requisite components with

```js
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
```

#### Router

We'll use this in one place in our application (and one place only). Very top level, essentially listening for when the route changes, and making that info accessible.

#### Route

Conditionally render a certain component based on what the route looks like. Explain how we are removing conditional rendering and using routes.

```js
// App.js
<Route path="/paintings" component={PaintingsList} />
```

Go through the process of building a app with routing. Start by wrapping your top-level app in the router in `app.js`:

```jsx
<BrowserRouter>
  <NavBar />
</BrowserRouter>
```
Explain how routes are different but `NavBar` is still there.

How to sent props with routes?

```js
// App.js

<Route path="/newPainting" render={(routeProps) => <PaintingForm {...routeProps} addPainting={this.addPainting}/>} />
```
explain `routeProps` when you explain redirect(`history.push()`).

#### Switch

Pick one of the following routes (the first that matches), don't look at the others (like an if/ else if/ else if).

#### Link

Changes the url we see in the browser, must have a 'to' prop.

```js
// PaintingList.js
<Link to="/newPainting"> Add a new painting</Link>

// PaintingForm.js
<Link to="/paintings"> Go to Painting List </Link>

```

#### Redirect

Forces a redirect to a particular route. Redirect after adding a new painting. Go thorugh `routeProps`.

```js
// PaintingForm.js
this.props.history.push("/paintings")
```

### Using the Router Components

Go through the process of building a app with routing. Start by wrapping your top-level app in the router in `index.js`:

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

Now you can make your app render different components using `<Render />` At this stage, it helps to have a separation of information and navigation, so the links can live on their own.