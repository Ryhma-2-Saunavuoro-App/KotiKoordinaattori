import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function IlmoitusTauluScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>IlmoitusTaulu Screen</Text>
      <View style={styles.content}>
        <Text>IlmoitusTaulu sisältö.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    alignItems: 'center',
  },
});
