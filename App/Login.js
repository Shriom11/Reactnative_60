/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';


export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            phone: '',
            password: ''
        }
    }

    loginPress = () =>{
        if(!this.state.phone){
            alert('Please enter phone number')
        }else if(!this.state.password){
            alert('Please enter password')
        }else{
            this.props.navigation.navigate('List')
        }
    }

    render() {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={{uri: 'https://mir-s3-cdn-cf.behance.net/user/276/4594ba15354117.576bace88c39c.png'}} style={{width: 120, height: 100}}/>

            <TextInput
                style={{textAlign: 'center', width: '80%', marginTop: 50}}
                keyboardType={'numeric'}
                placeholder={'Phone'}
                underlineColorAndroid={'#000'}
                placeholderTextColor={'#000'}
                onChangeText={text => { this.setState({ phone: text }) }}
            />

            <TextInput
                style={{textAlign: 'center', width: '80%', marginTop: 20}}
                placeholder={'Password'}
                secureTextEntry={true}
                underlineColorAndroid={'#000'}
                placeholderTextColor={'#000'}
                onChangeText={text => { this.setState({ password: text }) }}
            />

            <TouchableOpacity style={{backgroundColor: '#000', width: '80%', height: 50, borderRadius: 5, marginTop: 50}} onPress={() => this.loginPress()}>
                <Text style={{color: '#fff', alignSelf: 'center', paddingTop: 12, fontSize: 16}}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ marginTop: 20}} onPress={() => this.props.navigation.navigate('Signup')}>
                <Text style={{color: '#000', alignSelf: 'center', fontSize: 16}}>Signup</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }

