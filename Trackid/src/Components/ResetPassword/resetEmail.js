import React,{ Component } from "react";
import { View,StyleSheet,Image } from "react-native";
import { Container,Header,Content, Left, Body, Right, Title, Text, Button ,Item,Icon,Input} from "native-base";
export class ResetEmail extends Component{
    
    renderStart()
    {
        this.props.switchScreen('Start');
    }
    render(){
        return(
            <View>
                    <View>
                        
                        <Button transparent onPress={()=>this.renderStart()}  >
                            <Icon name="arrow-round-back" style={{ color:'#167ED8'}}></Icon>
                        </Button>

                        <Image source={require('../../images/Reset_Password/logo.png')} minHeight={74} minWidth={66} style={{left:118}}/>

                    </View>

                    
                            <Item style={{justifyContent:'center',alignSelf:'center',width:270,top:40}}>
                                        <Icon  name='mail' style={{color:'#167ED8'}}></Icon>
                                        <Input placeholder='example@abc.com'/> 
                            </Item>


                        <Button style={{justifyContent:'center',alignSelf:'center',top:50,width:270,backgroundColor:'#167ED8'}}>
                            <Text>Reset Password</Text>
                        </Button>

                        <Button transparent style={{justifyContent:'center',alignSelf:'center',top:230,width:270}}>
                            <Text style={{color:'#167ED8'}}>Don't have an account</Text>
                        </Button>

                        <Button style={{alignItems:'stretch',alignContent:'stretch',alignSelf:'stretch',top:250,justifyContent:'center', backgroundColor:'#167ED8'}}>
                            <Text style={{top:5}}>Sign up</Text>
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