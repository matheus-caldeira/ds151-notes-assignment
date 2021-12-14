import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  input: {
    width: '100%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputLarge: {
    flex: 1,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignItems: 'flex-start',
    textAlignVertical: 'top',
  },
  button: {
    width: '100%',
    minHeight: 40,
  }
})

export default styles;