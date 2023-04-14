import React from "react";
import ReactDOM from "react-dom/client";

/* const heading = React.createElement(
     "h1",
     {id:"heading", xyz:"abc"},
      "Hello from React!!");
*/

// ****************implement 2 sibiling elements using array of elements as 3rd attribute.*************
/* const parent = React.createElement("div",
                                  {id:"parent"},
                                     React.createElement("div", {id:"child"},
                                     [ React.createElement("h1", {}, "I am an h1 tag in react!"), React.createElement("h2", {}, "I am an h2 tag in react!")]));
*/

/*
1. JSX -- HTML/XML like syntax and not HTML in js.
2. JSX is  transpiled into JS  before it reaches JS Engine.----PARCEL()
3. React Element 
*/

const jsxHeading = <h1 className="heading"> Namaste using JSX</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

/*
# REACT COMPONENT
1. CLASS BASED COMPONENTS --- OLD
2. FUNCTIONAL COMPONENTS --- NEW just a normal JS function. but make sure to name it with Capital
*/

const HeadingComponent1 = () => (
  <h1> This is a functioanl component approach_1</h1>
);

//OR
const Title = () => {
  return <h1 className="title"> This is a title component</h1>;
};

const element = <span> This is JSX inclusion</span>;

// COMPONENT COMPOSITION
//REACT FRAGMENT
const HeadingComponent2 = () => {
  return (
    <React.Fragment>
      <div id="container1">
        <Title />
        {element}
        {Title()}
        <h1> This is also a functional component approach_2</h1>
      </div>
      <div id="container2">
        <h1>This is the sibling</h1>
      </div>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />);
