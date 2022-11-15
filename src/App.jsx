import './App.css';

import Portfolio from './components/portfolio/Portfolio.jsx';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Maianlayout from './components/Maianlayout/Maianlayout';
import About from './components/About/About';
import Head from './components/head/Head';
import Contact from './components/contact/Contact';
const routers =createBrowserRouter([
  {path:"/",element:<Maianlayout/>,children:[
    {path:"/" ,element:<Head/>},
    {path:"portfolio" ,element:<Portfolio/>},
    {path:"About" ,element:<About/>},
    {path:"portfolio" ,element:<Portfolio/>},
    {path:"Contact" ,element:<Contact/>}

  ]}
])



function App() {

  return (
  (
<RouterProvider router={routers}></RouterProvider>

  )
   
  );
}

export default App;
