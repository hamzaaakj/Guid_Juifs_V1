import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  Dimensions,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import DarkMapStyle from "../darkMapStyle.json";
import Modal from "react-native-modal"; // Import the Modal component

const MapScreen = ({ route, navigation }) => {
  const { location } = route.params;
  const [selectedLocation, setSelectedLocation] = useState(location);
  const screenHeight = Dimensions.get("window").height;

  // Initialize the mapViewRef using useRef
  const mapViewRef = useRef(null);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const navigateToLocation = (selectedLocation) => {
    setSelectedLocation(selectedLocation);
      // Close the panel when a location is selected
      toggleModal();

    // Animate the map to the selected location using mapViewRef
    mapViewRef.current.animateToRegion({
      latitude: selectedLocation.latitude,
      longitude: selectedLocation.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };
  

  const locations = [
    { id: 1, name: "S.G.P.O", latitude: 34.01471721386851, longitude: -6.823276542328307},
    { id: 2, name: "Location 2", latitude: 37.78925, longitude: -122.4334 },
    { id: 3, name: "Location 3", latitude: 37.79025, longitude: -122.4344 },
    { id: 4, name: "Location 4", latitude: 37.79125, longitude: -122.4354 },
    { id: 5, name: "Location 5", latitude: 37.79225, longitude: -122.4364 },
    { id: 6, name: "Location 6", latitude: 37.79325, longitude: -122.4374 },
    { id: 7, name: "Location 7", latitude: 37.79425, longitude: -122.4384 },
    { id: 8, name: "Location 8", latitude: 37.79525, longitude: -122.4394 },
    { id: 9, name: "Location 9", latitude: 37.79625, longitude: -122.4404 },
    { id: 10, name: "Location 10", latitude: 37.79725, longitude: -122.4414 },
    { id: 11, name: "Location 11", latitude: 37.79825, longitude: -122.4424 },
    { id: 12, name: "Location 12", latitude: 37.79925, longitude: -122.4434 },
    { id: 13, name: "Location 13", latitude: 37.80025, longitude: -122.4444 },
    { id: 14, name: "Location 14", latitude: 37.80125, longitude: -122.4454 },
    { id: 15, name: "Location 15", latitude: 37.80225, longitude: -122.4464 },
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <MapView
      style={styles.map}
      customMapStyle={DarkMapStyle}
      ref={mapViewRef} // Add this reference
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
        <Marker
          coordinate={{
            latitude: selectedLocation.latitude,
            longitude: selectedLocation.longitude,
          }}
          title={selectedLocation.name}
          pinColor="red"
        />
      </MapView>

      <TouchableOpacity onPress={toggleModal} style={styles.showPanelButton}>
        <Text style={styles.showPanelButtonText}>Show Panel</Text>
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible}
        style={styles.modal }
        swipeDirection={["down"]}
        onSwipeComplete={toggleModal}
      >
        <View style={styles.panel}>
          <View style={styles.draggableIndicator} />
          <Text>Locations</Text>
          <FlatList
            data={locations}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.locationItem}
                onPress={() => navigateToLocation(item)}
              >
                <Text style={styles.locationText}>{item.name}</Text>
                <Text style={styles.locationInfo}>
                Latitude: {location.latitude}, Longitude: {location.longitude}
              </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#3498db'
  },
  map: {
    flex: 1,
  },
  modal: {
    justifyContent: "flex-start",
    margin: 0,
    maxHeight: '70%',
    marginTop:'90%'
  },
  panel: {
    backgroundColor: "white",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
  },
  draggableIndicator: {
    width: 40,
    height: 4,
    backgroundColor: "#ccc",
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 10,
  },
  locationItem: {
     padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  locationText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  locationInfo: {
    fontSize: 14,
    color: '#666',
  },
  showPanelButton: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 140,
    borderRadius: 80,
    alignSelf: "center",
    marginVertical: 0.5,
    marginBottom: 7,   

  },
  showPanelButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  panelTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default MapScreen;