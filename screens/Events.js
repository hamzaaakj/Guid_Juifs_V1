import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Events = () => {
  const navigation = useNavigation();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);

  const events = [
    {
      id: 1,
      Nom_event: 'Event 1',
      picture_url: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      address_event: '123 Main St, City, Country',
      details_event: 'This is Event 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      latitude: 34.01471721386851, // Latitude for Event 1
      longitude: -6.823276542328307, // Longitude for Event 1
    },
    
    
  ];

  const openEventDetails = (event) => {
    setSelectedEvent(event);
    setIsModalVisible(true);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
    setIsModalVisible(false);
  };

  const updateFilteredEvents = (input) => {
    const filtered = events.filter(
      (event) =>
        event.Nom_event.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredEvents(filtered);
  };
  

  const handleSearchInputChange = (text) => {
    setSearchInput(text);
    updateFilteredEvents(text);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.eventItem} onPress={() => openEventDetails(item)}>
        <Image source={{ uri: item.picture_url }} style={styles.eventImage} />
        <View style={styles.eventDetails}>
          <Text style={styles.eventName}>{item.Nom_event}</Text>
          <Text style={styles.eventAddress}>{item.address_event}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search Events"
        value={searchInput}
        onChangeText={handleSearchInputChange}
      />
      <FlatList
        data={searchInput.length > 0 ? filteredEvents : events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={false}
        onRequestClose={closeEventDetails}
      >
        <View style={styles.modalContainer}>
          <Image source={{ uri: selectedEvent?.picture_url }} style={styles.modalImage} />
          <Text style={styles.modalName}>{selectedEvent?.Nom_event}</Text>
          <Text style={styles.modalAddress}>{selectedEvent?.address_event}</Text>
          <Text style={styles.modalHeading}>Event Details</Text>
          <Text style={styles.modalDetails}>{selectedEvent?.details_event}</Text>
          <TouchableOpacity
            style={styles.viewLocationButton}
            onPress={() => {
              navigation.popToTop();
              navigation.navigate('MapScreen', {
                location: {
                  latitude: selectedEvent?.latitude,
                  longitude: selectedEvent?.longitude,
                },
              });
            }}
          >
            <Text style={styles.viewLocationButtonText}>View Location</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={closeEventDetails}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  eventItem: {
    marginBottom: 24,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  eventImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  eventDetails: {
    padding: 16,
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  eventAddress: {
    fontSize: 14,
    color: 'gray',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  modalHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalImage: {
    width: '100%',
    height: 300,
    borderRadius: 12,
  },
  modalName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  modalAddress: {
    fontSize: 18,
    color: 'gray',
  },
  modalDetails: {
    fontSize: 16,
    lineHeight: 24,
  },
  viewLocationButton: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 16,
    alignSelf: 'center',
  },
  viewLocationButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#E74C3C',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignSelf: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchInput: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 12,
    borderRadius: 8,
  },
});

export default Events;
