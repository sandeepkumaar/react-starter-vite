import { 
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'

import App from './app.jsx';
import ErrorPage from './error-page.jsx';

// Routes
import routerFormRoute from './forms/routes.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<App/>}
      errorElement={<ErrorPage/>}
    >
      {routerFormRoute}
      
    </Route>

  )
)


export default function Root() {
  return (
    <RouterProvider router={router}/>
  )

}
