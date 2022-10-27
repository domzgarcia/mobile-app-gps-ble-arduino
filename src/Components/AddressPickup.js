import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

import { ScrollView } from 'react-native-gesture-handler'

const AddressPickup = ({
	placeholderText
}) => {
	return (
		<View style={styles.container}>

			<GooglePlacesAutocomplete
				placeholder={placeholderText}
				onPress={(data, details = null) => {
					console.log(data, details)
				}}
				query={{
					key: 'AIzaSyDHVqqXfKbLLazDO9OwNJXQfPdFXe3cs38',
					language: 'en'
				}}
				styles={{
					textInputContainer: styles.containerStyle,
					textInput: styles.textInputStyle
				}}
			/>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	containerStyle: {
		backgroundColor: 'white'
	},
	textInputStyle: {
		height: 48,
		color: 'black',
		fontSize: 16,
		backgroundColor: '#F3F3F3'
	}
})

export default AddressPickup;