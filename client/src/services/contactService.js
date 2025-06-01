import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/user';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const contactService = {
  // Get all contacts
  getContacts: async () => {
    try {
      const response = await api.get('/get-contacts');
      return response.data;
    } catch (error) {
      console.error('Error fetching contacts:', error);
      throw error;
    }
  },
  
  // Get contact by ID
  getContactById: async (id) => {
    try {
      const response = await api.get(`/get-contact/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching contact with ID ${id}:`, error);
      throw error;
    }
  },
  
  // Add new contact
  addContact: async (contactData) => {
    try {
      const response = await api.post('/add-contact', contactData);
      return response.data;
    } catch (error) {
      console.error('Error adding contact:', error);
      throw error;
    }
  },
  
  // Update contact
  updateContact: async (id, contactData) => {
    try {
      const response = await api.put(`/update-contact/${id}`, contactData);
      return response.data;
    } catch (error) {
      console.error(`Error updating contact with ID ${id}:`, error);
      throw error;
    }
  },
  
  // Delete contact
  deleteContact: async (id) => {
    try {
      const response = await api.delete(`/delete-contact/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting contact with ID ${id}:`, error);
      throw error;
    }
  }
};

export default contactService;
