import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js</Text>
      <Text>{asd(8,9)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function asd(x, y) {
  return x + y;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
