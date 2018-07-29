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
import { SignIn } from './src/Components/SignIn/signIn';
import { ResetPassword } from './src/Components/ResetPassword/resetPassword';
import { ResetEmail } from './src/Components/ResetPassword/resetEmail';
import { ConfirmPassword } from './src/Components/ResetPassword/confirmPassword';
import { ErrorScreen } from './src/Components/Error/errorScreen';
import { CheckOut } from './src/Components/CheckOuT/checkout';
import { Payment } from './src/Components/Payment/payment';
import { Visa } from './src/Components/Payment/visa';
import { Fawry } from './src/Components/Payment/fawry';
import { MainNewsFeed } from './src/Components/NewsFeed/SchoolAdmen/MainNewsFeed';
// import { MainNewsFeed } from './src/Components/NewsFeed/Parent/MainNewsFeed';
// import { MainNewsFeed } from './src/Components/NewsFeed/Teacher/MainNewsFeed';
import {MainMessages} from './src/Components/MessagesCenter/parent/mainMessages';
// import {MainMessages} from './src/Components/MessagesCenter/Teacher/mainMessages';
// import {MainMessages} from './src/Components/MessagesCenter/SchoolAdmin/mainMessages';
import { Content, Container,Footer,FooterTab } from 'native-base';
<<<<<<< HEAD
import { NewsFeed } from './src/Components/NewsFeed/SchoolAdmen/NewsFeed';
import { SearchedProfile } from './src/Components/NewsFeed/Parent/SearchedProfile';
import { SearchedProfileStruc } from './src/Components/NewsFeed/Parent/SearchedProfileStruc';
=======
import { RecentMessages } from './src/Components/MessagesCenter/parent/recentMessages';
// import { RecentMessages } from './src/Components/MessagesCenter/parent/recentMessages';
// import { RecentMessages } from './src/Components/MessagesCenter/SchoolAdmin/recentMessages';
// import { RecentMessages } from './src/Components/MessagesCenter/Teacher/recentMessages';
// import { NewsFeed } from './src/Components/NewsFeed/SchoolAdmen/NewsFeed';
// import { NewsFeed } from './src/Components/NewsFeed/Teacher/NewsFeed';
// import { NewsFeed } from './src/Components/NewsFeed/Parent/NewsFeed';



>>>>>>> 15e6f31bbe7f2b04d83fc1eefb7c83af885307fe


export default class App extends Component {
  
  state={renderScreen:null};
  componentDidMount(){
    this.switchScreen();
  }

<<<<<<< HEAD

  switchScreen(screen='SignIn'){
=======
  switchScreen(screen='MainMessages'){
>>>>>>> 15e6f31bbe7f2b04d83fc1eefb7c83af885307fe

    let appComponent=null;
    let active;

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
    case 'Payment':
    appComponent=<Payment switchScreen={this.switchScreen.bind(this)}/>
    break;
    case 'Visa':
    appComponent=<Visa switchScreen={this.switchScreen.bind(this)}/>
    break;
    case 'Fawry':
    appComponent=<Fawry switchScreen={this.switchScreen.bind(this)}/>
    break;
    case 'MainNewsFeed':
    appComponent=<MainNewsFeed switchScreen={this.switchScreen.bind(this)}/>
    break;
    case 'SearchedProfile':
    appComponent=<SearchedProfile switchScreen={this.switchScreen.bind(this)}/>
    break;
    case 'NewsFeed':
    appComponent=<NewsFeed switchScreen={this.switchScreen.bind(this)}/>
    break;
    case 'MainMessages':
    appComponent=<MainMessages switchScreen={this.switchScreen.bind(this)}/>
    break;
    // case 'RecentMessages':
    // appComponent=<RecentMessages switchScreen={this.switchScreen.bind(this)}/>
    // break;
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
  },backgroundBar:{
    backgroundColor:'#A310A5',
  },
 headerColor:{
  backgroundColor:'#F1E4F0',
  height:120
 }

});
