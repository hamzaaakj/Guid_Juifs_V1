import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ isSearchVisible, toggleSearchBar }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  const clearSearchText = () => {
    setSearchText('');
    toggleSearchBar(); // Hide the search bar
  };

  return (
    <View style={styles.container}>
      {isSearchVisible ? (
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            onChangeText={handleSearchTextChange}
            value={searchText}
            placeholderTextColor="#777" // Light gray placeholder text
          />
          <TouchableOpacity onPress={clearSearchText} style={styles.closeButton}>
            <Ionicons name="close" size={24} color="#777" />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={toggleSearchBar} style={styles.searchIconContainer}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 16,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Light gray background color
    borderRadius: 20, // Rounded corners
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc', // Light gray border color
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16, // Increase font size for better visibility
    color: '#333', // Dark text color
  },
  searchIconContainer: {
    backgroundColor: '#f5f5f5', // Light gray background color
    borderRadius: 20, // Rounded corners
    padding: 10, // Increased padding for better touchability
  },
  closeButton: {
    marginLeft: 8, // Add some space between the input and close button
  },
});

export default SearchBar;
