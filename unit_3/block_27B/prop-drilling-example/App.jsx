import { useState } from 'react';

function ContactRow({ contact }) {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}

function ContactList({ contacts }) {

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Phone</td>
          <td>Email</td>
        </tr>
        {error ? (
          <tr>{error}</tr>
        ) : (
          contacts.map((contact) => {
            return (
              <ContactRow
                key={contact.id}
                contact={contact}
              />
            );
          })
        )}
      </tbody>
    </table>
  );
}

function App() {
  const [contacts, setContacts] = useState([]);

  return (
    <div>
      <ContactList
        contacts={contacts}
      />
    </div>
  );
}
