import createFetchJson from './fetch';

const fetchJson = createFetchJson('http://localhost:4000');

export async function getContacts(query) {
  if (query) {
    return fetchJson(`/api/contacts?q=${query}`, { method: 'GET' });
  }
  return fetchJson(`/api/contacts`, { method: 'GET' });
};

export async function createContact() {
  let id = Math.random().toString(36).substring(2, 9);
  let contact = { id, createdAt: Date.now() };
  const randomData = await getRandomPeople();
  return fetchJson('/api/contacts/create', { method: 'POST', body: { ...contact, ...randomData } });
}

export async function getContact(id) {
  return fetchJson(`/api/contacts/${id}`, { method: 'GET' })
}

export async function updateContact(id, updates) {
  return fetchJson(`/api/contacts/${id}`, { method: 'PUT', body: updates })
}

export async function deleteContact(id) {
  return fetchJson(`/api/contacts/${id}`, { method: 'DELETE' }).then(results => {
    return results.status;
  });
}

async function getRandomPeople() {
  return fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(res => {
      const data = res.results[0];
      return {
        first: data.name.first,
        last: data.name.last,
        avatar: data.picture.large
      }
    })
    .catch(console.log);
}
