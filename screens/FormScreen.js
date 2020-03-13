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
	main:{
		minWidth: '100%',
		minHeight: '100%'
	},
	statusBar:{
		height: Constants.statusBarHeight,
	},
	wrapper:{
		flex:1,
		justifyContent: 'center',
		alignItems: 'stretch'
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
		borderColor: "#6C757D",
		backgroundColor: "white"
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
			<View style={styles.main}>
				<View style={styles.statusBar} />
				<View style={styles.wrapper} >
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
			</View>
		)
	}
}
