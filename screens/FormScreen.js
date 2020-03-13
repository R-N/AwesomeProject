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
				<Image />
				<TextInput
					placeholder="NIM"
					style={styles.inputText}
				/>
				<TextInput
					placeholder="Password"
					secureTextEntry={true}
					style={styles.inputText}
				/>
				{/* <Button title="Login"/> */}
				<TouchableOpacity
					style={styles.buttonLogin}
				>
					<Text>Login</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
