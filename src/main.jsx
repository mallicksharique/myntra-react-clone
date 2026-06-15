import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import App from './routes/App.jsx'
import {createBrowserRouter,  RouterProvider} from "react-router-dom"
import Bag from './routes/Bag.jsx'
import HomeItem from './components/HomeItem.jsx'
import Home from './routes/Home.jsx'
import {Provider} from  "react-redux"
import itemStore from './store/index.js'


const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <App />,
    children: [
      {
       
        index:true,
        element: <Home />,
      },
      {
        path: "/bag",
        element: <Bag/>,
      }
  
    ],
  },
],
{
   basename: "/myntra-react-clone",

}
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={itemStore}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
