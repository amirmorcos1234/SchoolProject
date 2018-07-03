import React,{ Component } from "react";
import { View,StyleSheet,Image } from "react-native";
import { Container,Header,Content, Left, Body, Right, Title } from "native-base";
export class Intro extends Component{
    componentWillMount(){
        setInterval(()=>{
           this.props.switchScreen('Start'); 
        },2000)
    }
    render(){
        return(
            <Container
            style={styles.background}
            >
            <View style={styles.LogoView}>
            <Image
            source={require('../../images/Logo/TK.png')}
            minWidth={213}
            minHeight={189}
            />
            <Image
            source={require('../../images/Logo/Paragraph.png')}
            style={{top:10}}
            minWidth={216}
            minHeight={56}
            />
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
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
}
)