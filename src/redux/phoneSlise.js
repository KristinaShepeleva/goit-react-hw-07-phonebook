import { createSlice } from "@reduxjs/toolkit";
import {fetchContacts, addContactThunk, deleteContactThunk} from "./operation/operation"

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};


const contactInitialState = { items: [], error: null, isLoading: false };

const contactSlice = createSlice({
  name: "contact",
  initialState: contactInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContactThunk.pending, handlePending)
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.error = null;
        state.isLoading = false;
      })
      .addCase(addContactThunk.rejected, handleRejected)
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
        state.error = null;
        state.isLoading = false;
      })
    .addCase(deleteContactThunk.rejected, handleRejected)
   
  },
});

//export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;



// import {
//   addContactThunk,
//   deleteContactThunk,
//   getContactsThunk,
// } from './operations/contactsThunk';

// const contactsInitialState = { items: [], error: null, isLoading: false };

// const contactSlice = createSlice({
//   name: 'phone',
//   initialState: contactsInitialState,
//   extraReducers: builder => {
//     builder
//       .addCase(getContactsThunk.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(getContactsThunk.fulfilled, (state, action) => {
//         state.items = action.payload;
//         state.error = null;
//         state.isLoading = false;
//       })
//       .addCase(getContactsThunk.rejected, (state, action) => {
//         state.error = action.payload;
//         state.isLoading = false;
//       })

//       .addCase(deleteContactThunk.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(deleteContactThunk.fulfilled, (state, action) => {
//         state.items = state.items.filter(item => item.id !== action.payload);
//         state.error = null;
//         state.isLoading = false;
//       })
//       .addCase(deleteContactThunk.rejected, (state, action) => {
//         state.error = action.payload;
//         state.isLoading = false;
//       })

//       .addCase(addContactThunk.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(addContactThunk.fulfilled, (state, action) => {
//         state.items = [action.payload, ...state.items];
//         state.error = null;
//         state.isLoading = false;
//       })
//       .addCase(addContactThunk.rejected, (state, action) => {
//         state.error = action.payload;
//         state.isLoading = false;
//       });
//   },
// });

// export const contactReducer = contactSlice.reducer;
// export const { addContact, deleteContact } = contactSlice.actions;