import React, {Component} from 'react';
import {View,Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SignIn from './SignIn';
import Home from './Home';


const MainNavigator = createStackNavigator(
	{
		SignIn: { screen: SignIn },
		Home :{ screen: Home }
	},
	{
		initialRouteName: 'SignIn',
		navigationOptions: {
			headerStyle: { backgroundColor: '#510DA8'},
			headerTintColor: '#fff',
			headerTitleStyle: { color: '#fff'}
		}
	}
);

export default class Main extends Component{
	render(){
		return (
			<View>
				<SignIn/>
			</View>
		);
	}
}