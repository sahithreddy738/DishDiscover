import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./HeaderComponent";

// creating react elements using create Element
const reactElement=<h3>react element heading</h3>
const TitleComponent=()=>(<h1 id="heading">title component</h1>);
console.log(<TitleComponent/>);
//Functional Component 
//component composition
const HeadingComponent=() => {
    return (
        <div>
            <TitleComponent/>
            <TitleComponent></TitleComponent>
            {TitleComponent()}
            <h2 className="heading">React using Functional Component</h2>
            {reactElement}
            <HeaderComponent/>
        </div>
    );
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);