import React, { Component } from 'react'
import { View, Text, StyleSheet, LogBox  } from 'react-native'
import AddressPickup from '../Components/AddressPickup'
import { ScrollView } from 'react-native-gesture-handler'

const ChooseLocation = () => {
	// NOTE: Supress logs
	LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);
	
	return (
		<View style={styles.container }>
			<ScrollView 
				nestedScrollEnabled={true}
				keyboardShouldPersistTaps='handled'
				style={{ backgroundColor: 'white', flex: 1, padding: 24 }}
			>
				<AddressPickup placeholderText="Enter Pickup Location" />
				<View style={{ marginBottom: 16 }}></View>
				<AddressPickup placeholderText="Enter Destination Location" />
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default ChooseLocation;