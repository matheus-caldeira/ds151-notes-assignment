const notes = ({counter, notes }, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        counter: counter + 1,
        notes: [
          ...notes,
          {
            id: counter + 1,
            title: action.title,
            description: action.description
          }
        ]
      }
    case 'EDIT_NOTE':
      return {
        counter,
        notes: notes.map(note => {
          if (note.id === action.id)
            return {
              ...note,
              title: action.title,
              description: action.description
            }
          return note;
        })
      }
    case 'DELETE_NOTE':
      return {
        counter,
        notes: notes.filter(
          note => note.id !== action.id
        )
      }
    default:
      return notes
  }
}

export default notes