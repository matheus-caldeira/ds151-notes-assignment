import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    borderWidth: 1,
    marginBottom: 10
  },
  text: {
    textAlign: 'center',
    marginBottom: 5,
    fontWeight: "bold",
    fontSize: 15,
  },
  contentButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

export default styles;