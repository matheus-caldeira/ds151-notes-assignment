import React from 'react'

import {NoteProvider} from './note'

function Context({ children }) {
  return (
    <NoteProvider>
      {children}
    </NoteProvider>
  );
}

export default Context;