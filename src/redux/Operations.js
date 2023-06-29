import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, {rejectWithValue}) => {
    try {
        const response = await axios.get("/contacts")
      return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data)     
    }
  }
)

export const addContact  = createAsyncThunk(
  'contacts/addContact',
  async ({name, phone}, {rejectWithValue}) => {
    try {
        const response = await axios.post("/contacts", {name, phone})
      return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data)     
    }
  }
)

export const deleteContact  = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, {rejectWithValue}) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`)
      return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data)     
    }
  }
)