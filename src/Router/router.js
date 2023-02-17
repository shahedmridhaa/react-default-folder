import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";

 export const router = createBrowserRouter([
    {
        path:"/",
        element:<LayOut/>,
        children:[
         {
            path:"/",
            element:<Home/>
         },
         {
            path:"/about",
            element:<About/>
         }
        ]
    }
])