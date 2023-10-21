import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id: "parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"This is Namaste React "),
        React.createElement("h2",{},"by Akshay Saini"),

    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I'm an h1 tag"),
        React.createElement("h2",{},"I'm an h2 tag"),
    ]),
]);
console.log(parent);//object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// the above code is so complex so to resolve it we use JSX to make our life easy
//but the core of react is above thing jsx makes our life easy behind the seen JSX convert code in above form

//This is the last time we are using
//React.createElement bye bye this now we use JSX for react element

