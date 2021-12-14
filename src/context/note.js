import React, { createContext, useContext, useReducer } from 'react';
import note from '../reducers/note'

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [{ counter, notes }, dispatch] = useReducer(
    note,
    {
      counter: 1,
      notes: []
    }
  );

  const addNote = (title, description) => {
    return dispatch({
      type: 'ADD_NOTE',
      title,
      description
    })
  }
  
  const editNote = (id, title, description) => {
    return dispatch({
      type: 'EDIT_NOTE',
      id,
      title,
      description
    })
  }
  
  const deleteNote = (id) => {
    return dispatch({
      type: 'DELETE_NOTE',
      id,
    })
  }

  return (
    <NoteContext.Provider
      value={{
        notes,
        counter,
        addNote,
        editNote,
        deleteNote
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export function useNote() {
  const context = useContext(NoteContext);

  return context;
}
