import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import HomePage from "./Components/HomePage/HomePage";
import App from './App';


const router=createBrowserRouter([{
path:'/',
element:<App/>,
children:[
  {
   path:'/',
   element:<HomePage/>
  },{
   path:'/:albumId',
  //  element:</>
  }
]

}])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);


