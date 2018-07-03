import React,{ Component } from "react";
import { View,StyleSheet,Image } from "react-native";
import { Container,Header,Content, Left, Body, Right, Title, Text, Button, Icon } from "native-base";

export class SignUpAs extends Component{
render(){
    return(
    <Container
    style={{backgroundColor:'white'}}
    >
        <Header transparent>
          <Left>
            <Button transparent >
              <Icon name='arrow-back' style={styles.IconColor} />
            </Button>
          </Left>
          <Body style={{left:70}}>
            <Title style={styles.IconColor}>Sign up As?</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
        <Text>
            I Am a
            </Text>
            </View>
      </Container>
    )
}
}
const styles=StyleSheet.create(
    {
    IconColor:{
        color:'#2699FB'
    }
    }
)