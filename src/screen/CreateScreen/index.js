import React, { useRef } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { useNote } from '../../context/note'

import styles from './styles'

function CreateScreen({ navigation }) {
  const { addNote } = useNote();
  const title = useRef('');
  const description = useRef('');

  function create() {
    if (title.current && description.current) {
      addNote(title.current, description.current)
      navigation.goBack();
    }
  }

  return (
    <View style={styles.container}>
      <Text>Titutlo</Text>
      <TextInput
        onChangeText={text => title.current = text}
        style={styles.input}
      />

      <Text>Descrição</Text>
      <TextInput
        multiline={true}
        underlineColorAndroid='transparent'
        onChangeText={text => description.current = text}
        style={styles.inputLarge}
      />
      <Button 
        onPress={create}
        title="Save"
        style={styles.button}
      />
    </View>
  );
}

export default CreateScreen;