import React,{ Component } from "react";
import { View,StyleSheet,Image } from "react-native";
import { Container,Header,Content, Left, Body, Right, Title, Text, Button, Icon, Thumbnail } from "native-base";

export class SignUpTeacher extends Component{
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
          <Body>
            <Title style={[styles.IconColor,styles.Title]}>Personal Info</Title>
          </Body>
         
        </Header>
        </Container>
    )
}
        }
          const styles=StyleSheet.create(
            {
            IconColor:{
                color:'#2699FB',
               
            },
            Title:{
              fontWeight:'bold',
              fontSize:14,
              fontFamily:'Arial',
              alignSelf:'center',
              right:'20%'
            },
        }
    )