import React from 'react'
import { View, Text, Button } from 'react-native';

import { useNote } from '../../context/note'

import styles from './styles';

function Note({ id, title, navigate }) {
  const { deleteNote} = useNote();

  function remove() {
    deleteNote(id)
  }

  function edit() {
    navigate("Edit", { id: id })
  }

  function show() {
    navigate("Show", { id: id })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.contentButtons}>
        <Button title="Show" onPress={show}/>
        <Button title="Edit" color="green" onPress={edit} />
        <Button title="Delete" color="red" onPress={remove}/>
      </View>
    </View>
  );
}

export default Note;