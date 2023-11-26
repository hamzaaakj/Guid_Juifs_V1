import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Info = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/favicon.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Welcome to Your App</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius
            nisl eget justo vehicula, nec mattis lectus faucibus.
          </Text>
          <Text style={styles.version}>Version 1.0.0</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    padding: 20,
    paddingTop: 80, // Adjust this value to create space for NavBar
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 100, // Adjust the size as needed
    height: 100, // Adjust the size as needed
  },
  infoContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  version: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Info;
