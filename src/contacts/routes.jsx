import Contact, {contactLoader} from './index.jsx';
import {
  Route
} from 'react-router-dom';

const routes = (
  <Route
    path='contacts/:contactId'
    loader={contactLoader}
    element={<Contact/>}
  >
  </Route>

);

export default routes;
