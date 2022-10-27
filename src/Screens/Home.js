
import React, { Component, useState, useRef } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import imagePath from '../Constants/imagePath'

const Home = ( {navigation} ) => {

  const DELTA_CORDS = {
    latitude: 0.0922,
    longitude: 0.0421
  }

  const [state, setState] = useState({
    startingCords: {      
      latitude: 14.733659539393857,
      longitude: 121.04815456077418,
      latitudeDelta: DELTA_CORDS.latitude,
      longitudeDelta: DELTA_CORDS.longitude
    },
    destinationCords: {
      latitude: 14.721996540660891,
      longitude: 121.04023667957362,
      latitudeDelta: DELTA_CORDS.latitude,
      longitudeDelta: DELTA_CORDS.longitude
    }
  })

  // NOTE: Deconstruct
  const mapRef = useRef();

  const { startingCords, destinationCords } = state

  // NOTE: Methods
  const onPressLocation = () => {
  	navigation.navigate('chooseLocation')
  }

  return (
    <View style={{ flex: 1, }}>

		<View style={{ flex: 1, }}>
			<MapView
			ref={mapRef}
			style={StyleSheet.absoluteFill}
			initialRegion={startingCords}>

			<Marker coordinate={startingCords} 
				image={imagePath.icCurLoc}
			/>
			<Marker coordinate={destinationCords} 
				image={imagePath.icGreenMarker}
			/>

			<MapViewDirections 
			  origin={startingCords}
			  destination={destinationCords}
			  apikey={'AIzaSyDHVqqXfKbLLazDO9OwNJXQfPdFXe3cs38'}
			  strokeWidth={3}
			  strokeColor="red"
			  optimizeWaypoints={true}
			  onReady={ result => {

			    // NOTE: Will be used later for 10m away computations
			    console.log(`Distance: ${result.distance} km`)
			    console.log(`Distance: ${result.duration} min`)

			    mapRef.current.fitToCoordinates(result.coordinates, {
			      edgePadding: { 
			        right: 50,
			        bottom: 30,
			        left: 50,
			        top: 30
			      },
			    })
			  }}
			/>
			</MapView>
		</View>

		<View style={styles.bottomCard}>
			<Text>Where are you going?</Text>
			<TouchableOpacity
				style={styles.inputStyle}
				onPress={onPressLocation}
			>
				<Text>Choose your Location</Text>
			</TouchableOpacity>
		</View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomCard: {
  	backgroundColor: 'white',
  	width: '100%',
  	padding: 30,
  	borderTopEndRadius: 24,
  	borderTopStartRadius: 24
  },
  inputStyle: {
	backgroundColor: 'white',
	borderRadius: 4,
	borderWidth: 1,
	alignItems: 'center',
	height: 48,
	justifyContent: 'center',
	marginTop: 16
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})

export default Home