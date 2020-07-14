import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, TouchableOpacity, ImageBackground, Image } from 'react-native';
import firebase from 'react-native-firebase';
import Src from './images/wallpaper.png';
import logoImg from './images/logo.png';



export default class SingnIn extends Component{
	constructor(props) {
        super(props);

        this.state = {
            phone: '',
            confirmResult: null,
            varificationCode: '',
            userId: '',
            verifyView: false
        }
    }

    static navigationOptions = { headerTitleStyle: { textAlign: 'center'}, title: 'SignIn BlissU' };

    handlePhoneAuth = () =>{
        //OTP generation
        firebase.auth().signInWithPhoneNumber(this.state.phone)
        .then(confirmResult => {
            this.setState({confirmResult: confirmResult, verifyView: true});
		})
        .catch(err=>Alert.alert(err.message));
	}

    handleVerifyCode = ()=>{
        //OTP verification
        const {confirmResult, varificationCode} = this.state

        confirmResult.confirm(varificationCode)
        .then(user=>{
            this.setState({userId: user.uid});
            Alert.alert('Verified Successfully!');
            //navigate to homePage
            const { navigate } = this.props.navigation;
            setTimeout(()=>navigate('Home'), 2000);
        })
        .catch(err=>Alert.alert(err.message));
	}


    render(){
        
        if(this.state.verifyView){ return(
            <ImageBackground style={styles.picture} source={Src}> 

                 <View style={styles.logoContainer}>
                    <Image source={logoImg} style={styles.logoImage} />
                    <Text style={styles.logotext}>REACT NATIVE</Text>
                 </View>


                <View style = {styles.SignIn}>
                    <TextInput
                        style = {styles.input}
                        placeholder = "         Enter your verification Code"
                        placeholderTextColor = '#eee'
                        keyboardType = 'numeric'
                        value = {this.state.varificationCode}
                        onChangeText = {(code) => this.setState({varificationCode: code})}
                        maxLength = {15}
                    />

                    <TouchableOpacity
                        style = {styles.themeButton}
                        onPress = {()=>this.handleVerifyCode()}
                        >
                        <Text style = {styles.Button}> Verify </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style = {styles.themeButton}
                        onPress = {()=>this.setState({verifyView: false, phone: '', varificationCode: ''})}
                        >
                        <Text style = {styles.Button}> Back </Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        );}

        else{ return(
            <ImageBackground style={styles.picture} source={Src}>
             
                <View style={styles.logoContainer}>
                    <Image source={logoImg} style={styles.logoImage} />
                    <Text style={styles.logotext}>REACT NATIVE</Text>
                 </View>
 
                <View style = {styles.SignIn}>
                    
                    <TextInput 
                        style = {styles.input}
                        placeholder = "         Enter your phone number"
                        placeholderTextColor = '#fff'
                        keyboardType = 'phone-pad'
                        value = {this.state.phone}
                        onChangeText = {(phone) => this.setState({phone: phone})}
                        maxLength = {15}
                    />

                    <TouchableOpacity
                        style = {styles.themeButton}
                        onPress = {()=>this.handlePhoneAuth()}
                        >
                        <Text style = {styles.Button}> SUBMIT </Text>
                    </TouchableOpacity>
                       
                </View>
            </ImageBackground>
		);}

	}

}


const styles = StyleSheet.create({
   
    picture: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    logoContainer: {
        flex:2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoImage: {
        width: 80,
        height: 80,
    },
    logotext: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20,
    },
    SignIn: {
        flex:3,
        marginTop:10,
        alignItems:'center',
        justifyContent: 'center'
	},
    Button :{
        fontSize: 20,
        color: 'black'
	},
    input: {
        height: 50,
        width:'90%',
        padding: 4,
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: 'pink',
        color:'black',
        backgroundColor: 'transparent'
	},
    themeButton: {
        marginTop:20,
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7a42f4',
        borderWidth: 0.5,
        borderRadius: 40
	}
});

