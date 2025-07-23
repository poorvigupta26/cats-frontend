import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.tsx'
import Predict from './pages/Predict.tsx'

const appRoutes = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/predict",
        element:<Predict/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={appRoutes}/>
)
