import React, { Component } from 'react';
import { 
	View,
	StyleSheet,
	TextInput,
	Button,
	TouchableOpacity,
	Text,
	Image
} from 'react-native';
import Constants from 'expo-constants'

const styles = StyleSheet.create({
	statusBar:{
		height: Constants.statusBarHeight,
	},
	commonElement:{
		margin: 10
	},
	inputText:{
		height: 40,
		borderWidth: 1
	},
	buttonLogin:{
		backgroundColor: '#fff000',
		width: 150,
		borderWidth: 1,
		borderColor: 'red'
	}
})

export default class FormScreen extends Component{
	render(){
		return (
			<View>
				<View style={styles.statusBar} />
				<TextInput
					placeholder="NIM"
					style={[styles.commonElement, styles.inputText]}
				/>
				<TextInput
					placeholder="Password"
					secureTextEntry={true}
					style={[styles.commonElement, styles.inputText]}
				/>
				<TouchableOpacity
					style={[styles.commonElement, styles.buttonLogin]}
				>
					<Text>Login</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
