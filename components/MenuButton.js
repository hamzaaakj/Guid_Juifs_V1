import React, { useState } from 'react';
import { TouchableOpacity, Image, StyleSheet, Modal, View, Text, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const MenuButton = () => {
  const navigation = useNavigation();
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const sidebarWidth = 250; // Adjust the width of the sidebar as needed
  const sidebarAnimation = useState(new Animated.Value(-sidebarWidth))[0];

  const handleMenuPress = () => {
    setSidebarVisible(true);
    Animated.timing(sidebarAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const closeSidebar = () => {
    Animated.timing(sidebarAnimation, {
      toValue: -sidebarWidth,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setSidebarVisible(false);
    });
  };

  const navigateToHome = () => {
    closeSidebar();
    navigation.navigate('Home'); // Assuming 'Home' is the name of your home component screen
  };

  const navigateToEvents = () => {
    closeSidebar();
    navigation.navigate('Events');
  };

  const navigateToInfo = () => {
    closeSidebar();
    navigation.navigate('Info');
  };

  const sidebarTranslateX = sidebarAnimation.interpolate({
    inputRange: [-sidebarWidth, 0],
    outputRange: [-sidebarWidth, 0],
  });

  return (
    <View>
      <Modal visible={isSidebarVisible} animationType="slide" transparent>
        <View style={styles.overlay}>
          <Animated.View style={[styles.sidebarContainer, { transform: [{ translateX: sidebarTranslateX }] }]}>
            <View style={styles.sidebarHeader}>
              <Image source={require('../assets/favicon.png')} style={styles.logo} resizeMode="contain" />
              <Text style={styles.headerTitle}>Your App</Text>
            </View>
            <View style={styles.sidebarContent}>
              <TouchableOpacity onPress={navigateToHome} style={styles.sidebarButton}>
                <FontAwesome name="home" style={styles.sidebarIcon} />
                <Text style={styles.sidebarButtonText}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={navigateToEvents} style={styles.sidebarButton}>
              <FontAwesome name="calendar" style={styles.sidebarIcon} />
                <Text style={styles.sidebarButtonText}>Events</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={navigateToInfo} style={styles.sidebarButton}>
              <FontAwesome name="info" style={styles.sidebarIcon} />
                <Text style={styles.sidebarButtonText}>Info</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={closeSidebar} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.container} onPress={handleMenuPress}>
        <Ionicons name="menu" size={28} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  sidebarContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 250,
    backgroundColor: '#fff',
    borderRightWidth: 1,
    borderRightColor: '#ccc',
  },
  sidebarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sidebarContent: {
    flex: 1,
    padding: 16,
  },
  sidebarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#F4F4F4', // Light gray background color
  },
  sidebarIcon: {
    marginRight: 10,
    fontSize: 24,
    color: '#007AFF', // Blue color
  },
  sidebarButtonText: {
    fontSize: 16,
    marginLeft: 12,
    color: '#333', // Dark text color
  },
  closeButton: {
    padding: 16,
    alignItems: 'center',
    borderRadius:10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor:'#3498db'
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default MenuButton;
