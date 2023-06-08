import axios from 'axios';

const baseURL = axios.create({
  baseURL: 'https://6481b5bf29fa1c5c5031eaf6.mockapi.io/contacts/',
});

export const getContacts = async () => {
  const { data } = await baseURL.get();
  
  return data;
};

export const deleteContact = async id => {
  const { data } = await baseURL.delete(id);
  return data;
};

export const addContact = async contact => {
  const { data } = await baseURL.post('', contact);
  return data;
};