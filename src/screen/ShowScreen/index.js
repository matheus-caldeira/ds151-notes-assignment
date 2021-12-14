import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';

import { useNote } from '../../context/note'

import styles from './styles'

function EditScreen({ route }) {
  const [note, setNote] = useState({ title: '', description: ''})

  const { notes } = useNote();

  const { id } = route.params;

  useEffect(() => {
    setNote(notes.find(noteFind => noteFind.id === id))
  }, [id, notes])

  return (
    <View style={styles.container}>
      <Text>Titutlo</Text>
      <TextInput
        style={styles.input}
        defaultValue={note.title}
        editable={false}
      />

      <Text>Descrição</Text>
      <TextInput
        multiline={true}
        underlineColorAndroid='transparent'
        style={styles.inputLarge}
        defaultValue={note.description}
        editable={false}

      />
    </View>
  );
}

export default EditScreen;