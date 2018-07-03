import React,{ Component } from "react";
import { View,StyleSheet,Image } from "react-native";
import { Container,Header,Content, Left, Body, Right, Title, Text, Button } from "native-base";
export class Start extends Component{
    renderSignUp(){
        this.props.switchScreen('SignUpAs');
    }
    render(){
        return(
            <Container
            style={styles.background}
            >
            <View style={styles.LogoView}>
            <Image
            source={require('../../images/Start_Screen/TK.png')}
            />
            <Image
            source={require('../../images/Start_Screen/Paragraph.png')}
            style={{top:10}}
            
            />
            
            </View>
            <View style={styles.ButtonsView} >
            <Button
            onPress={()=>this.renderSignUp()}
            style={[styles.Buttons,styles.SignUpButton]}>
                <Text style={styles.SignUpText}>
                    SIGN UP
                    </Text>
                </Button>
                <Button
                transparent
            style={[styles.Buttons,styles.LoginButton]}>
                <Text style={{color:'white'}}>
                    LOG IN
                    </Text>
                </Button>
            </View>

            
            </Container>
        )
    }
}
const styles=StyleSheet.create({
  background:{
    backgroundColor:'#167ED8'
  },
  LogoView:{
    flex:0.7,
    justifyContent:'center',
    alignItems:'center'
  },
  ButtonsView:{
    left:18
  },
  Buttons:{
    justifyContent:'center',
    alignContent:'center',
    width:'90%'
  }
  ,
  SignUpButton:{
      backgroundColor:'white',
  },
  SignUpText:{
    color:'#167ED8'
  },
  LoginButton:{
      top:20,
      borderRadius:4,
      borderWidth:2,
      borderColor:'white'
  }
}
)