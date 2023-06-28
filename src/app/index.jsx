import { Outlet, useLoaderData } from 'react-router-dom';
import { SearchForm } from './search-form';
import { ContactList } from './contact-list'

import {getContacts} from '../service';

export function loader({request}) {
  return getContacts();
};



export default function App() {
  const contacts = useLoaderData();
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <SearchForm />
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ContactList contacts={contacts}/>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
