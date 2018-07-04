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
  switchScreen(screen='SignUpAs'){
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
