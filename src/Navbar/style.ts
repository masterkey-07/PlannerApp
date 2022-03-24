import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'rgba(240,80,80, 0.25)'},

  header: {
    backgroundColor: 'rgb(40,40,40)',
    paddingTop: 216,
    paddingBottom: 24,
    paddingLeft: 6,
    position: 'relative',
    borderBottomColor: 'rgb(40,40,40)',
    borderBottomWidth: 1,
  },
  dev: {
    fontFamily: 'cursive',
    position: 'absolute',
    right: 6,
    bottom: 6,
    fontSize: 18,
    color: 'white',
    textShadowColor: 'white',
    textShadowRadius: 5,
  },
  title: {
    fontFamily: 'cursive',
    color: 'rgb(40,40,40)',
    fontSize: 32,
    fontWeight: 'bold',
    textShadowColor: 'rgb(40,40,40)',
    textShadowRadius: 10,
  },

  navitem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 18,
    paddingRight: 12,
    paddingBottom: 18,
    paddingLeft: 12,
    borderBottomColor: 'rgb(40,40,40)',
    borderBottomWidth: 1,
  },
  navtext: {
    fontFamily: 'serif',
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
