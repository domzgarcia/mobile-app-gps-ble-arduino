import 'expo-dev-client';

import React, { Component, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const App = () => {

// Cruz Ville : 14.733659539393857, 121.04815456077418
// Best Link  : 14.721996540660891, 121.04023667957362

  const [state, setState] = useState({
    pickupCords: {      
      latitude: 14.733659539393857,
      longitude: 121.04815456077418,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    droplocationCords: {
      latitude: 14.721996540660891,
      longitude: 121.04023667957362,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
  });

  const { pickupCords, droplocationCords } = state;

  return (
    <>
    <Text>Mobile App Test 2022</Text>

    <View style={styles.container}>

    <MapView
        style={StyleSheet.absoluteFill}
        initialRegion={pickupCords}
    >

      <MapViewDirections 
        origin={pickupCords}
        destination={droplocationCords}
        strokeWidth={3}
        strokeColor="hotpink"
        apikey={'AIzaSyDHVqqXfKbLLazDO9OwNJXQfPdFXe3cs38'}
      />

    </MapView>

    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default App;