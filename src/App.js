import React , {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";

import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

import { createBrowserRouter , RouterProvider,Outlet} from "react-router-dom";

import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";


//Chunking
//Code Splitting
//Dynamic bundling

const  Grocery = lazy(()=> import("./components/Grocery"))

const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />,
            },  
            {
                path:"/about",
                element:<About />,
            },
            {
                path:"/contact",
                element:<Contact />,
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading........</h1>}><Grocery/></Suspense>
            },
            { 
                // due to the : this path is dynamic // every rest have different resId
                path:"/restaurants/:resId",
                element: <RestaurantMenu />
            }
            

        ],
        errorElement:<Error/>
    },
    // {
    //     path: "/about",
    //     element: <About />,
    // },
    // {
    //     path:"/contact",
    //     element: <Contact />
    // },
    

])



const root= ReactDOM.createRoot(document.getElementById("root"));
//earlier we use below code
// root.render(<AppLayout/>)

root.render(<RouterProvider router={appRouter} />);
