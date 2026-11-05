// @ts-ignore - react-native is provided by the project runtime environment
import * as React from 'react';
// @ts-ignore - react-native is provided by the project runtime environment
import { View, Text, StyleSheet } from 'react-native';

export default function NotFoundScreen() {
  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(Text, { style: styles.button }, 'Oops! Not Found')
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
