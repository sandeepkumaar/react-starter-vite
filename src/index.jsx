import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'

import './index.css'
import App, { contactsLoader, createContactAction } from './app';
import contactRoutes from './contacts/routes';
import ErrorPage from './error-page.jsx';
import { initializeFaro } from '@grafana/faro-web-sdk';

initializeFaro({
  url: 'https://gently-concise-dogfish.ngrok-free.app/faro-grafana/collect',
  app: {
    name: 'react-starter-vite',
    version: '1.0.0',
  }
});

// Routes

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      loader={contactsLoader}
      action={createContactAction}
      element={<App />}
      errorElement={<ErrorPage />}
    >
      {contactRoutes}

    </Route>

  )
)


const mode = import.meta.env.MODE;
console.log('env mode', mode);
console.log(import.meta.env.VITE_MSW_URL);

export default function Root() {
  return (
    <RouterProvider router={router} />
  )

};

