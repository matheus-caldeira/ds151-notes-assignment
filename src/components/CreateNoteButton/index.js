import React from 'react';
import { Button } from 'react-native';

function CreateNoteButton({ navigation }) {
  return (
    <Button
      onPress={() => navigation.navigate('Create')}
      title="Create Note"
    />
  );
}

export default CreateNoteButton;
