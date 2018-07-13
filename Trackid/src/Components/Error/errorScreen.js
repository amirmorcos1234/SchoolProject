import React,{ Component } from "react";
import { View,StyleSheet,Image } from "react-native";
import { Container,Header,Content, Left, Body, Right, Title, Text, Button ,Item,Icon,Input, Textarea} from "native-base";
export class ErrorScreen extends Component{
    
    
    render(){
        return(
            <Container style={{backgroundColor:'#167ED8'}}>
            <View style={{alignItems:'center',top:180}}>


                <Text style={{color:'white',fontWeight:'bold',fontSize:25}}>ERROR</Text>
                <Icon name="error" style={{color:'white',top:10}}></Icon>
                
                <View >
                    <Text style={{color:'white',width:250,textAlign:'center',top:20,lineHeight: 30}}>The payment didn't complete please check </Text>
                    <Text style={{color:'white',flexWrap:'wrap',width:270,textAlign:'center',top:20,lineHeight: 30}}>* your bank balance </Text>
                    <Text style={{color:'white',flexWrap:'wrap',width:270,textAlign:'center',top:20,lineHeight: 30}}> * your internet connection</Text>
                    <Text style={{color:'white',flexWrap:'wrap',width:270,textAlign:'center',top:20,lineHeight: 30}}>  * your data</Text>
                </View>
               
                  <Button style={{backgroundColor:'white',width:100,top:40,alignContent:'center',justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                     <Text style={{color:'#167ED8'}}>OK</Text>
                  </Button>

                  
            </View>
            </Container>
            
               

            
        )
    }
}
const styles=StyleSheet.create({
}
)