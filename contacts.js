import fs from 'fs/promises';
import path from 'path';

const contactsPath = path.resolve("db", "contacts.json");


export async function listContacts() {
    const list = await fs.readFile(contactsPath, 'utf-8');
    return JSON.parse(list)
}

export async function getContactById(contactId) {
    const listString = await fs.readFile(contactsPath, 'utf-8');
    const list = JSON.parse(listString);
    const index = list.findIndex(c => c.id === contactId);
    if(index === -1){
        return null
    };
    const contact = list[index];
    return contact
  }
  
  async function removeContact(contactId) {
    // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  }
  
  async function addContact(name, email, phone) {
    // ...твій код. Повертає об'єкт доданого контакту (з id).
  }