import React from "react";
import ReactDOM from "react-dom/client";


//-------- episode -3----------------

const Title = ()=>(
        <h1 className="head" tableIndex="5">
            Namaaste React using JSX ,
        </h1>
)

const HeadingComponent=()=>(

    <div id="container">
            <Title/>
            <Title></Title>
            {Title()}
            <h1 className="heading">Namaaste React Functional Component</h1>
        </div>
    )

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)




// inject title react element int to the HeadingComponent 

//React Element
// const title = (
//     <h1 className="head" tableIndex="5">
//         Namaaste React using JSX ,
//     </h1>
// )

// // Functional Component
// const HeadingComponent =()=> (
//     <div id="container">
//         {title}
//         <h1 className="heading">Namaaste React Functional Component</h1>
//     </div>
// )

// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>)


// inject title react component element int to the HeadingComponent 

//Functional Component
// const Title = ()=>(
//     <h1 className="head" tableIndex="5">
//         Namaaste React using title functional component,
//     </h1>
// )

// // Functional Component
// const HeadingComponent =()=> (
//     <div id="container">
//         <Title/>
//         <h1 className="heading">Namaaste React Functional Component</h1>
//     </div>
// )

// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>)




//React Element

// const heading=(
//    <h1 className="head" tabIndex="5">
//       Namaaste React using JSX ,
//     </h1>)

// React Functional Component

// const HeadingComponent= () => {
//     return <h1> Namaaste React Functional Component</h1>
// }

// const HeadingComponent2 = ()=> <h1>Namaaste React Functional Component</h1>




// ------------epidode -3--------------------

//React.createElement => ReactElement-JS Object =>HTMLElement(render)

// const heading=React.createElement(
//     "h1",
//     {id:"heading"},
//     "Namaste React "
// )

// console.log(heading)

//JSX- html Like or XML - like syntax 
//JSX=> BABEL trsanspiles it to React.createElement=>ReactElement- JS Object =>HTMLElement(render)

// const jsxHeading=<h1>Namaaste React using JSX</h1>;
// console.log(jsxHeading)

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading)

// render functional component on the page
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(HeadingComponent)  // this is the wrong way by this way we only react elements not functional components
// root.render(<HeadingComponent/>)


// -----------------episode 3----------------------------------- 









// const parent = React.createElement("div",{id: "parent"},[
//     React.createElement("div",{id:"child"},[
//         React.createElement("h1",{},"This is Namaste React "),
//         React.createElement("h2",{},"by Akshay Saini"),

//     ]),
//     React.createElement("div",{id:"child2"},[
//         React.createElement("h1",{},"I'm an h1 tag"),
//         React.createElement("h2",{},"I'm an h2 tag"),
//     ]),
// ]);
// console.log(parent);//object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// // the above code is so complex so to resolve it we use JSX to make our life easy
// //but the core of react is above thing jsx makes our life easy behind the seen JSX convert code in above form

// //This is the last time we are using
// //React.createElement bye bye this now we use JSX for react element

