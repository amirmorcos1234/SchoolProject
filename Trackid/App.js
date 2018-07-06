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
import { SignUpTeacher } from './src/Components/SignUpTeacher/signUpTeacher';
import { Pinfo } from './src/Components/Parents/Pinfo';
import { Plans } from './src/Components/Parents/Plans';
import { Payment } from './src/Components/Parents/Payment';
import { SignIn } from './src/Components/SignIn/signIn';
import { ResetPassword } from './src/Components/ResetPassword/resetPassword';
import { ResetEmail } from './src/Components/ResetPassword/resetEmail';
import { ConfirmPassword } from './src/Components/ResetPassword/confirmPassword';
import { ErrorScreen } from './src/Components/Error/errorScreen';
import { CheckOut } from './src/Components/CheckOuT/checkout';
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
  switchScreen(screen='Payment'){
=======
  switchScreen(screen='CheckOut'){
>>>>>>> c4f10ed1b505868297de9864f73b294c20d86bdc

    let appComponent=null;
    switch(screen){
    case 'Splash':
    appComponent=<Intro switchScreen={this.switchScreen.bind(this)}/>;
    break;
    case 'Start':
    appComponent=<Start switchScreen={this.switchScreen.bind(this)}/>;
    break;
    case 'SignUpAs':
    appComponent=<SignUpAs switchScreen={this.switchScreen.bind(this)}/>;
    break;
    case 'Pinfo':
    appComponent=<Pinfo switchScreen={this.switchScreen.bind(this)}/>;
    break;
    case 'Plans':
    appComponent=<Plans switchScreen={this.switchScreen.bind(this)}/>;
    break;
    case 'Payment':
    appComponent=<Payment switchScreen={this.switchScreen.bind(this)}/>;
    break;
    case 'SignUpTeacher':
    appComponent=<SignUpTeacher switchScreen={this.switchScreen.bind(this)}/>;
    break;
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
    break;
    case 'ErrorScreen':
    appComponent=<ErrorScreen switchScreen={this.switchScreen.bind(this)}/>
    break;
    case 'CheckOut':
    appComponent=<CheckOut switchScreen={this.switchScreen.bind(this)}/>
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
