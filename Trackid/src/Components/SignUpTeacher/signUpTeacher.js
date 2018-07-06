import React,{ Component } from "react";
import { View,StyleSheet,Image,Text} from "react-native";
import { Container, Header, Content, Item, Input, Icon, Left, Button, Body, Title } from 'native-base';


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
        <View style={{top:30,justifyContent:'center'}}>
        <View style={styles.InputsView}>
          <Item>
            <Icon active name='person' style={styles.InputColor} />
            <Input placeholder='Mahmoud Ashraf'
            placeholderTextColor='#2699FB'
            
            />
          </Item>
          </View>
        <View style={[styles.InputsView,{top:30}]}>
          
          <Item>
            <Icon active name='mail' style={styles.InputColor}  />
            <Input placeholder='Mahmoud Ashraf' 
            placeholderTextColor='#2699FB'
            
            />
          </Item> 
          </View>
          <View style={[styles.InputsView,{top:60}]}>
          <Item>
            <Icon active name='lock' style={styles.InputColor} />
            <Input placeholder='Mahmoud Ashraf'
            secureTextEntry={true}
            placeholderTextColor='#2699FB'
            
            />
          </Item>
          </View>
          <View style={[styles.InputsView,{top:80}]}>
          <Item>
            <Icon active name='lock' style={styles.InputColor} />
            <Input placeholder='Mahmoud Ashraf'
            placeholderTextColor='#2699FB'
            />
          </Item>
          </View>
         
        </View>
        <View style={styles.SignUpButtonView}>
          <Button style={styles.SignUpButton}>
            <Text style={styles.SignUpText}>
              Sign Up
              </Text>
            </Button>
            </View>
            <View style={styles.LogInView}>
            <Text
            style={styles.AlreadyText}
            >
              Already have an account?
              </Text>
          <Button full  style={{backgroundColor:'#2699FB'}}>
            <Text style={styles.SignUpText}>
              Login
              </Text>
            </Button>
            </View>
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
            InputColor:{
              color:'#2699FB'
            },
            InputsView:{
              width:'88%',
              left:20
            },
            SignUpButtonView:{
              flex:1,
              justifyContent:'center',
              alignContent:'center'
             
            },
            SignUpButton:{
              left:20,
              width:'88%',
              backgroundColor:'#2699FB',
              justifyContent:'center'
            },
            SignUpText:{
              color:'white'
            },
            LogInView:{
              justifyContent:'center',
              alignContent:'center'
            },
            AlreadyText:{
              bottom:35,
              alignSelf:'center',
              color:'#2699FB',
              fontFamily:'Arial',
              fontSize:10,
            
            }
        }
    )
