import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import NavBar from '../components/NavBar';
import Swiper from 'react-native-swiper';
import DarkMapStyle from '../darkMapStyle.json';

const images = [
  require('../assets/1.jpeg'),
  require('../assets/2.jpeg'),
  require('../assets/3.jpeg'),
];

const Home = ({ navigation }) => {
  const navigateToLocation = () => {
    navigation.navigate('MapScreen', {
      location: {
        latitude: 34.01471721386851, // Latitude of Morocco
        longitude: -6.823276542328307, // Longitude of Morocco
        name: 'Morocco', // Name of the location (you can customize this)
      },
    });
  };

  return (
    <View style={styles.container}>
      <NavBar />
      <Swiper style={styles.sliderContainer} autoplay={true}>
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={image} style={styles.image} />
          </View>
        ))}
      </Swiper>
      <MapView
        style={styles.map}
        customMapStyle={DarkMapStyle}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={navigateToLocation}
        activeOpacity={0.7}
      >
        <Text style={styles.showLocationsButton}>Show Locations</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  sliderContainer: {
    height: 300,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: 400,
  },
  map: {
    flex: 1, // Take remaining space
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#3498db', // Use a professional color
  },
  showLocationsButton: {
    fontSize: 18,
    color: '#fff', // White text for visibility
    fontWeight: 'bold', // Bold text for emphasis
  },
});

export default Home;
