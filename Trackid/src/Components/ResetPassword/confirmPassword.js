import React,{ Component } from "react";
import { View,StyleSheet,Image } from "react-native";
import { Container,Header,Content, Left, Body, Right, Title, Text, Button ,Item,Icon,Input} from "native-base";
export class ConfirmPassword extends Component{
    
    renderStart()
    {
        this.props.switchScreen('Start');
    }
    render(){
        return(
            <Container style={{backgroundColor:'white'}}>
  <View>
                    <Header transparent style={{height:130}}>
                        <Left>
                            <Button transparent>
                              <Icon name='arrow-back'style={{color:'#167ED8',top:-15}} />
                            </Button>
                        </Left>
                        <Body>
                            <Image source={require('../../images/Reset_Password/logo.png')}
                             minHeight={74} minWidth={83} style={{left:30}}/>
                        </Body>
                   </Header>
                            <Text style={{justifyContent:'center',textAlign:'center',alignItems:'center',color:'#167ED8',top:30}}>Enter your new password and confirm it</Text>
                    
                            <Item style={{justifyContent:'center',alignSelf:'center',width:270,top:40}}>
                                        <Icon  name='lock' style={{color:'#167ED8'}}></Icon>
                                        <Input placeholder='*********'/> 
                            </Item>

                             <Item style={{justifyContent:'center',alignSelf:'center',width:270,top:30}}>
                                        <Icon  name='lock' style={{color:'#167ED8'}}></Icon>
                                        <Input placeholder='*********' secureTextEntry/> 
                            </Item>


                        <Button style={{justifyContent:'center',alignSelf:'center',top:40,width:270,backgroundColor:'#167ED8'}}>
                            <Text>Reset Password</Text>
                        </Button>

                        <Button transparent style={{justifyContent:'center',alignSelf:'center',top:165,width:270}}>
                            <Text style={{color:'#167ED8'}}>Don't have an account</Text>
                        </Button>

                        <Button style={{alignItems:'stretch',alignContent:'stretch',alignSelf:'stretch',top:182,justifyContent:'center', backgroundColor:'#167ED8'}}>
                            <Text style={{top:5}}>Sign up</Text>
                        </Button>
            </View>
               
            </Container>
          

            
        )
    }
}
const styles=StyleSheet.create({
  background:{
    backgroundColor:'white'
  }
}
)