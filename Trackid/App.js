/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Intro } from './src/Components/SplashScreen/intro';
import { Start } from './src/Components/StartScreen/start';
import { SignUpAs } from './src/Components/SignUpAs/SignUpAs';
<<<<<<< HEAD
import { ResetPassword } from './src/Components/ResetPassword/resetPassword';
import { SignIn } from './src/Components/SignIn/signIn';
import { ResetEmail } from './src/Components/ResetPassword/resetEmail';
import { ConfirmPassword } from './src/Components/ResetPassword/confirmPassword';
=======
import { SignUpTeacher } from './src/Components/SignUpTeacher/signUpTeacher';
>>>>>>> fd165ff558960163a2f957c0fa60786392eec221

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  state={renderScreen:null};
  componentDidMount(){
    this.switchScreen();
  }
<<<<<<< HEAD
  switchScreen(screen='SignIn'){
=======
  switchScreen(screen='Splash'){
>>>>>>> fd165ff558960163a2f957c0fa60786392eec221
    let appComponent=null;
    switch(screen){
    case 'Splash':
    appComponent=<Intro switchScreen={this.switchScreen.bind(this)}/>;
    break;
    case 'Start':
    appComponent=<Start switchScreen={this.switchScreen.bind(this)}/>
    break;
    case 'SignUpAs':
    appComponent=<SignUpAs switchScreen={this.switchScreen.bind(this)}/>
    break;
<<<<<<< HEAD
    case 'ResetPassword':
    appComponent=<ResetPassword switchScreen={this.switchScreen.bind(this)}/>
    break;
    case 'ResetEmail':
    appComponent=<ResetEmail switchScreen={this.switchScreen.bind(this)}/>
    break;
    case 'ConfirmPassword':
    appComponent=<ConfirmPassword switchScreen={this.switchScreen.bind(this)}/>
    break;
    case 'SignIn':
    appComponent=<SignIn switchScreen={this.switchScreen.bind(this)}/>
=======
<<<<<<< HEAD
    case 'personalInfo':
    appComponent=<personalInfo switchScreen={this.switchScreen.bind(this)}/>
=======
    case 'SignUpTeacher':
    appComponent=<SignUpTeacher switchScreen={this.switchScreen.bind(this)}/>
>>>>>>> 040b0aeb30261a76689163e4ab8281ffd8ac5a96
>>>>>>> fd165ff558960163a2f957c0fa60786392eec221
    break;
    }

    this.setState({renderScreen:appComponent});

  }
  render() {
    return (
      this.state.renderScreen
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
