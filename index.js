import * as contactsServices from './contacts.js';
import { program } from "commander";
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();
const options = program.opts();


async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactsList = await contactsServices.listContacts();
      console.table(contactsList);
      break;

    case "get":
      const contact = await contactsServices.getContactById(id);
      console.log(contact);
      break;

    case "add":
      const newContact = await contactsServices.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const contForDel = await contactsServices.removeContact(id);
      console.log(contForDel);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
