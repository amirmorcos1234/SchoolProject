import React,{ Component } from "react";
import { View,StyleSheet,Image } from "react-native";
import { Container,Header,Content, Left, Body, Right, Title, Text, Button } from "native-base";
export class Start extends Component{
    
    render(){
        return(
            <Container
            style={styles.background}
            >
            <View style={styles.LogoView}>
            <Image
            source={require('../../images/Start_Screen/TK.png')}
            minWidth={165.13}
            minHeight={146.99}
            />
            <Image
            source={require('../../images/Start_Screen/Paragraph.png')}
            style={{top:10}}
            minWidth={162}
            minHeight={41}
            />
            
            </View>
            <View >
            <Button style={{flex:1,justifyContent:'center',alignContent:'center'}}>
                <Text>
                    SIGN UP
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
  }
}
)