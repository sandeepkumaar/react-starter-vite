import Contact, {contactLoader, deleteContactAction } from './index.jsx';
import ContactForm, {updateContactAction} from './contact-form.jsx';
import {
  Route
} from 'react-router-dom';

const routes = (
  <>
    <Route
      path='contacts/:contactId'
      loader={contactLoader}
      action={deleteContactAction}
      element={<Contact/>}
    >
    </Route>
    <Route
      path='contacts/:contactId/edit'
      loader={contactLoader}
      action={updateContactAction}
      element={<ContactForm />}
    >
    </Route>
  </>
);

export default routes;
