import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Src from './images/home2.png';

export default class Home extends Component{
	static navigationOptions = { headerTitleStyle: { alignSelf: 'center'}, title: 'Home'};

	render(){
		return(
			<ImageBackground style={styles.picture} source={Src}>
				<View style = {styles.container}>
					<Text style = {styles.text}>Welcome to BlissU!</Text>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	picture: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
		justifyContent: 'flex-start',
        alignItems:'center',
    },
    container: {
		marginTop:60,
        justifyContent: 'center',
        alignItems:'center',
	},
    text: {
        fontSize: 30,
		color: 'pink'
	}
});