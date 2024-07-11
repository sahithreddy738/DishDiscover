import React from "react";
import ReactDOM from "react-dom";

// creating react elements using create Element
const heading=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"Im an h1 guy"),
        React.createElement("h2",{},"Im an h2 guy")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"Im an h1 guy"),
        React.createElement("h2",{},"Im an h2 guy")
    ])
]);
console.log(heading);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);