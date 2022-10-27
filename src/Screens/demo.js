// NOTE: Add this for deployment
import 'expo-dev-client'

import React, { Component, useState, useRef } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

const App = () => {

  const DELTA_CORDS = {
    latitude: 0.0922,
    longitude: 0.0421
  }

  const [state, setState] = useState({
    pickupCords: {      
      latitude: 14.733659539393857,
      longitude: 121.04815456077418,
      latitudeDelta: DELTA_CORDS.latitude,
      longitudeDelta: DELTA_CORDS.longitude
    },
    droplocationCords: {
      latitude: 14.721996540660891,
      longitude: 121.04023667957362,
      latitudeDelta: DELTA_CORDS.latitude,
      longitudeDelta: DELTA_CORDS.longitude
    }
  })

  // NOTE: Deconstruct
  const mapRef = useRef();
  const { pickupCords, droplocationCords } = state

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={StyleSheet.absoluteFill}
        initialRegion={pickupCords}
      >
        <Marker coordinate={pickupCords} />
        <Marker coordinate={droplocationCords} />

        <MapViewDirections 
          origin={pickupCords}
          destination={droplocationCords}
          apikey={'AIzaSyDHVqqXfKbLLazDO9OwNJXQfPdFXe3cs38'}
          strokeWidth={3}
          strokeColor="hotpink"
          optimizeWaypoints={true}
          onReady={ result => {

            // NOTE: Will be used later for 10m away computations
            console.log(`Distance: ${result.distance} km`)
            console.log(`Distance: ${result.duration} min`)

            mapRef.current.fitToCoordinates(result.coordinates, {
              edgePadding: { 
                right: 30,
                bottom: 300,
                left: 30,
                top: 100
              },
            })
          }}
        />
      </MapView>
    </View>
  )
}

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
})

export default App