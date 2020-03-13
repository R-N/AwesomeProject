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
import FormScreen from './screens/FormScreen.js'

export class App extends Component{
	render(){
		return (
			<FormScreen />
		)
	}
}

export default App

