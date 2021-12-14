import React, { useRef, useState, useCallback, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { useNote } from '../../context/note'

import styles from './styles'

function EditScreen({ navigation, route }) {
  const [note, setNote] = useState({ title: '', description: ''})

  const { editNote, notes } = useNote();
  const title = useRef('');
  const description = useRef('');

  const { id } = route.params;

  const edit = useCallback(() => {
    editNote(
      note.id,
      title.current || note.title,
      description.current || note.description
    );
    navigation.goBack();
  }, [note, navigation])

  useEffect(() => {
    setNote(notes.find(noteFind => noteFind.id === id))
  }, [id, notes])

  return (
    <View style={styles.container}>
      <Text>Titutlo</Text>
      <TextInput
        onChangeText={text => title.current = text}
        style={styles.input}
        defaultValue={note.title}
      />

      <Text>Descrição</Text>
      <TextInput
        multiline={true}
        underlineColorAndroid='transparent'
        onChangeText={text => description.current = text}
        style={styles.inputLarge}
        defaultValue={note.description}
      />
      <Button 
        onPress={edit}
        title="Update"
        style={styles.button}
      />
    </View>
  );
}

export default EditScreen;