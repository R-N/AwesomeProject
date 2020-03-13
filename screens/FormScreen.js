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
	commonBox:{
		borderRadius: 8,
		padding: 10
	},
	inputText:{
		height: 40,
		borderWidth: 1,
		borderColor: "#6C757D"
	},
	buttonLogin:{
		backgroundColor: '#007BFF'
	},
	buttonLoginText:{
		color: 'white'
	}
})

export default class FormScreen extends Component{
	render(){
		return (
			<View>
				<View style={styles.statusBar} />
				<TextInput
					placeholder="NIM"
					style={[styles.commonElement, styles.commonBox, styles.inputText]}
				/>
				<TextInput
					placeholder="Password"
					secureTextEntry={true}
					style={[styles.commonElement, styles.commonBox, styles.inputText]}
				/>
				<TouchableOpacity
					style={[styles.commonElement, styles.commonBox, styles.buttonLogin]}
				>
					<Text style={styles.buttonLoginText}>Login</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
