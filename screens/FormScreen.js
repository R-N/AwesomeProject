import React, { Component } from 'react';
import { 
	View,
	StyleSheet,
	TextInput,
	Button,
	TouchableOpacity,
	Text,
	Image,
	ImageBackground
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
		alignItems: 'center'
	},
	loginBox:{
		width: '80%',
		backgroundColor: '#ffffffdd',
		borderRadius: 16,
		padding: 16
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
		backgroundColor: '#007BFF',
		alignItems: 'center'
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
				<ImageBackground  
					source={require("../assets/Tulips.jpg")}
					style={styles.wrapper} 
					>
					<View style={styles.loginBox} >
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
				</ImageBackground>
			</View>
		)
	}
}
