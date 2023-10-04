import { StyleSheet } from "react-native";

export const BasicTheme = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f3f1e8'
  },
  main: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 60,
  },
  change: {
    marginTop: 80,
    marginLeft: 15, 
    justifyContent: 'flex-start',
  },
  changer: {
    marginTop: 3,
    marginRight: 300, 
  },
  
  label: {
    fontSize: 15
  },

  numbers: {
    textAlign: 'center',
    fontSize: 25,
    height: 50,
    width: 250,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#080808',
    margin: 10
  },

  results: {
    fontSize: 60,
    textShadowColor: '#2b2924',
    textShadowRadius: 12,
  },
  low: {
    color: '#46e611',
  },
  moderate: {
    color: '#eecd49',
  },
  high: {
    color: '#cb0e0e',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 6,
    elevation: 10,
    backgroundColor: '#aea153',
    borderWidth: 2,
    borderColor: '#080808'
  },
});

export const DarkTheme = StyleSheet.create({
  container: {
    ...BasicTheme.container,
    backgroundColor: '#443e2c',
  },
  main: {
    ...BasicTheme.main
  },
  title: {
    ...BasicTheme.title,
    color: '#FFFFFF'
  },
  change: {
    ...BasicTheme.change
  },
  changer: {
    ...BasicTheme.changer
  },
  swithctext: {
    ...BasicTheme.swithctext,
    color: '#FFFFFF'
  },
  label: {
    ...BasicTheme.label,
    color: '#FFFFFF'
  },
  numbers: {
    ...BasicTheme.numbers,
    backgroundColor: '#FFFFFF'
  },
  results: {
    ...BasicTheme.results
  },
  low: {
    ...BasicTheme.low
  },
  moderate: {
    ...BasicTheme.moderate
  },
  high: {
    ...BasicTheme.high
  },
  choice: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15
  },
  radio: {
    backgroundColor: '#443e2c',
    borderRadius: 15,
    padding: 3
  },
  button: {
    ...BasicTheme.button
  }
});