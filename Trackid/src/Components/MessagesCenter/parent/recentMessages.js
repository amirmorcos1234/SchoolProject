import React,{ Component } from "react";
import { View,StyleSheet,Image,TextInput,ScrollView} from "react-native";
import {Header,Content, Left, Body,Label,DatePicker,CheckBox, Right, Title, Text, Button ,Item,Icon,Input, Card, CardItem, Container, Thumbnail} from "native-base";
export class RecentMessages extends Component{
   
    render(){
        const uri=require('../../../images/SignUPAs/mother.png');

        return(
            <Content  style={{backgroundColor:'white'}}>
<ScrollView>
            <Card transparent noShadow={true} style={{minHeight:88}}>
            <CardItem style={{backgroundColor:'#F1F9FF'}}>
            <Left>
                <Thumbnail small source={uri}/>
                <Body>
                <Text style={{fontSize:8,color:'#707070',fontWeight:"bold" }}>
                <Text style={{fontWeight:'bold',fontSize:14,color:'#2699FB' }}>Dr. Mahmoud Ashraf </Text>  Tamem's Father(class 3B)</Text>
                <Text style={{fontWeight:'bold',fontSize:14,color:'#707070' }}>You:<Text style={{color:"#2699FB",fontSize:14,fontWeight:'normal'}}>  your son is so smart</Text></Text>
                
              </Body>
              </Left>
            </CardItem>
            </Card>
            <Card transparent noShadow={true} style={{minHeight:88}}>
            <CardItem style={{backgroundColor:'#F1F9FF'}}>
            <Left>
                <Thumbnail small source={uri}/>
                <Body>
                <Text style={{fontSize:8,color:'#707070',fontWeight:"bold" }}>
                <Text style={{fontWeight:'bold',fontSize:14,color:'#2699FB' }}>Dr. Mahmoud Ashraf </Text>  Tamem's Father(class 3B)</Text>
                <Text style={{fontWeight:'bold',fontSize:14,color:'#707070' }}>You:<Text style={{color:"#2699FB",fontSize:14,fontWeight:'normal'}}>  your son is so smart</Text></Text>
                
              </Body>
              </Left>
            </CardItem>
            </Card>
            <Card transparent noShadow={true} style={{minHeight:88}}>
            <CardItem style={{backgroundColor:'#F1F9FF'}}>
            <Left>
                <Thumbnail small source={uri}/>
                <Body>
                <Text style={{fontSize:8,color:'#707070',fontWeight:"bold" }}>
                <Text style={{fontWeight:'bold',fontSize:14,color:'#2699FB' }}>Dr. Mahmoud Ashraf </Text>  Tamem's Father(class 3B)</Text>
                <Text style={{fontWeight:'bold',fontSize:14,color:'#707070' }}>You:<Text style={{color:"#2699FB",fontSize:14,fontWeight:'normal'}}>  your son is so smart</Text></Text>
                
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
