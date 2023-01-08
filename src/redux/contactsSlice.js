import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  
    initialState,
    reducers: {
        addContact: (state, { payload }) => {
            state.contacts.push(payload)
        },
        deleteContact: (state, { payload }) => {
          state.contacts =  state.contacts.filter(({ id }) => id !== payload)
        },
        filterReducer: (state, { payload }) => {
            state.filter = payload.toLowerCase();
        }

    }
});

export const { addContact, deleteContact , filterReducer} = contactsSlice.actions;
export default contactsSlice.reducer