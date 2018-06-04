import { StyleSheet } from 'react-native';

export default {
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: '5%',
    paddingTop: '20%'
  },
  scrollContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  scrollContentContainer: {
    paddingTop: '4%',
    paddingBottom: '4%',
    paddingHorizontal: '4%'
  },
  card: {
    width: '95%',
    alignSelf: 'center',
    padding: '5%',
    marginTop: '5%',
    shadowColor: '#222222',
    shadowOffset: {
      height: 5,
      width: 5
    },
    borderRadius: 8
  }
};
