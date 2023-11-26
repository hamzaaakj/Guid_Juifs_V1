// NavBar.js
import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import MenuButton from './MenuButton';
import SearchBar from './SearchBar';

const NavBar = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearchBar = () => {
    setSearchVisible(!isSearchVisible);
  };

  return (
    <View style={styles.container}>
      <MenuButton />
      {!isSearchVisible && <Image source={require('../assets/favicon.png')} style={styles.logo} />}
      <SearchBar isSearchVisible={isSearchVisible} toggleSearchBar={toggleSearchBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: 16,
    backgroundColor: '#f2f2f2',
  },
  logo: {
    width: 40,
    height: 40,
    left: 120,
  },
});

export default NavBar;
