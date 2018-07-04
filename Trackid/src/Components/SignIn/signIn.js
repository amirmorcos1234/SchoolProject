import React,{ Component } from "react";
import { View,StyleSheet,Image } from "react-native";
import { Container,Header,Content, Left, Body, Right, Title, Text, Button ,Item,Icon,Input} from "native-base";
export class SignIn extends Component{
    
    render(){
        return(
            <View>
                  <Header transparent>
                        <Left>
                            <Button transparent>
                              <Icon name='arrow-back'style={{color:'#167ED8'}} />
                            </Button>
                        </Left>
                        <Body>
                            <Image source={require('../../images/Reset_Password/logo.png')} minHeight={74} minWidth={66} />
                        </Body>
                   </Header>






                    
                            <Item style={{justifyContent:'center',alignSelf:'center',width:270,top:30}}>
                                        <Icon  name='mail' style={{color:'#167ED8'}}></Icon>
                                        <Input placeholder='example@abc.com'/> 
                            </Item>

                            <Item style={{justifyContent:'center',alignSelf:'center',width:270,top:30}}>
                                        <Icon  name='lock' style={{color:'#167ED8'}}></Icon>
                                        <Input placeholder='*********' secureTextEntry/> 
                            </Item>

                        <Button style={{justifyContent:'center',alignSelf:'center',top:40,width:270,backgroundColor:'#167ED8'}}>
                            <Text>Continue</Text>
                        </Button>



                        <Button transparent style={{justifyContent:'center',alignSelf:'center',top:40,width:270}}>
                            <Text style={{color:'#167ED8'}}>Forget your Password?</Text>
                        </Button>


                        <Button transparent style={{justifyContent:'center',alignSelf:'center',top:140,width:270}}>
                            <Text style={{color:'#167ED8'}}>Don't have an account</Text>
                        </Button>

                        <Button style={{alignItems:'stretch',alignContent:'stretch',alignSelf:'stretch',top:150,justifyContent:'center', backgroundColor:'#167ED8'}}>
                            <Text style={{top:5}}>Sign Up</Text>
                        </Button>
            </View>
               

            
        )
    }
}
const styles=StyleSheet.create({
  background:{
    backgroundColor:'white'
  }
}
)