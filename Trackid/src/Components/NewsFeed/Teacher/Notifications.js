import StepIndicator from 'react-native-step-indicator';
import React,{ Component } from "react";
import { View,StyleSheet,Image,TextInput,ScrollView} from "react-native";
import {Header,Content, Left, Body,Label,DatePicker,CheckBox, Right, Title, Text, Button ,List,Item,Icon,Input, Card, CardItem, Container, Thumbnail} from "native-base";
export class Notifications extends Component{
   
    render(){
        // const defaultUri=require('../../../images/Cards/fawry.png');
        const uri=require('../../../images/SignUPAs/mother.png');
        return(
            <Content  style={{backgroundColor:'white',alignSelf:'center',width:300}}>
 <ScrollView>
            <Card transparent noShadow={true} style={{minHeight:88}}>
            <CardItem style={{backgroundColor:'#F1F9FF'}}>
            <Left>
                <Thumbnail small source={uri}/>
                <Body style={{flexDirection:'row',flexWrap:'wrap'}}>
                <Text style={{fontSize:14,color:'#2699FB' }}><Text style={{fontWeight:'bold',fontSize:14,color:'#2699FB' }}>Name Surname  </Text>Added a photo of your son</Text>
                {/* <Text style={{fontSize:14,color:'#2699FB',flexWrap:'wrap'}}>.</Text> */}
              </Body>
              </Left>
            </CardItem>
            </Card>

            <Card transparent noShadow={true} style={{minHeight:88,top:-20}}>
            <CardItem style={{backgroundColor:'#F1F9FF'}}>
            <Left>
                <Thumbnail small source={uri}/>
                <Body style={{flexDirection:'row',flexWrap:'wrap'}}>
                <Text style={{fontSize:14,color:'#2699FB' }}><Text style={{fontWeight:'bold',fontSize:14,color:'#2699FB' }}>Name Surname  </Text>Added a photo of your son</Text>
                {/* <Text style={{fontSize:14,color:'#2699FB',flexWrap:'wrap'}}>.</Text> */}
              </Body>
              </Left>
            </CardItem>
            </Card>


            <Card transparent noShadow={true} style={{minHeight:88,top:-40}}>
            <CardItem style={{backgroundColor:'#F1F9FF'}}>
            <Left>
                <Thumbnail small source={uri}/>
                <Body style={{flexDirection:'row',flexWrap:'wrap'}}>
                <Text style={{fontSize:14,color:'#2699FB' }}><Text style={{fontWeight:'bold',fontSize:14,color:'#2699FB' }}>Name Surname  </Text>Added a photo of your son</Text>
                {/* <Text style={{fontSize:14,color:'#2699FB',flexWrap:'wrap'}}>.</Text> */}
              </Body>
              </Left>
            </CardItem>
            </Card>
            
          </ScrollView>
            </Content>
               

            
        )
    }
}
const styles=StyleSheet.create({
 text:{
    color:'#167ED8'
 },
 headers:{
     color:'#FFFFFF'
 },
 
    IconColor: {
        color: '#2699FB',

    },
    Title: {
        fontWeight: 'bold',
        fontSize: 14,
        fontFamily: 'Arial',
        alignSelf: 'center',
        right: '20%',justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center'
    },

}
)
