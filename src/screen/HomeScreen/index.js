import React from 'react';
import { View, FlatList } from 'react-native';

import Note from '../../components/Note'

import { useNote } from '../../context/note'

import styles from './styles';

function HomeScreen({ navigation }) {
  const { notes } = useNote();

  return (
    <View style={styles.container}>
      <FlatList 
        data={notes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Note id={item.id} title={item.title} navigate={navigation.navigate} />
        )}
      />
    </View>
  );
}

export default HomeScreen;