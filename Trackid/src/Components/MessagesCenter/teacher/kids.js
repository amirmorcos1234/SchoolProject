import React,{ Component } from "react";
import { View,StyleSheet,Image,TouchableOpacity } from "react-native";
import { Container,Header,Content, Left, Body, Right, Title, Text, Button, Icon, Thumbnail,Item,Input } from "native-base";

export class Kids extends Component{
 
render(){
    return(
    <Container style={{backgroundColor:'white',width:295,left:10,right:10}}>
        <Item regular style={{borderColor:'#7FC4FD'}}> 
                <Input style={{color:'#2699FB',borderColor:'#7FC4FD',height:48,width:343}} placeholderTextColor='#2699FB' placeholder='type here ...' />
                <Icon active style={{color:'#2699FB'}} minHeight={15} minWidth={15} name='search' />
       </Item>
       

            <View style={[styles.BigView,{top:15}]}>
            <View style={{flexDirection:'column'}}>
            <View style={[styles.ImagesViewFather,{right:50}]}>
              <Text style={{fontSize:77,fontWeight:'bold',color:'white'}}>3A</Text>
              </View>
              <View style={styles.CardTextView}>
              <Text style={styles.TextStyle}>
                Class 3A
                </Text>
                </View>
                </View>
            <View style={{flexDirection:'column'}}>
                
              <View style={[styles.ImagesViewMother,{width:'130%'}]}>
              <Text style={{fontSize:77,fontWeight:'bold',color:'white'}}>3A</Text>
              
              
              </View>
              <View style={styles.CardTextView}>
              <Text style={[styles.TextStyle,styles.RightCardsStyle]}>
              Class 3A
                </Text>
               
                </View>
              </View>
              </View>


  <View style={[styles.BigView,{top:15}]}>
            <View style={{flexDirection:'column'}}>
            <View style={[styles.ImagesViewFather,{right:50}]}>
            <Text style={{fontSize:77,fontWeight:'bold',color:'white'}}>3A</Text>

              </View>
              <View style={styles.CardTextView}>
              <Text style={styles.TextStyle}>
              Class 3A
               
                </Text>
                </View>
                </View>
            <View style={{flexDirection:'column'}}>
                
              <View style={[styles.ImagesViewMother,{width:'130%'}]}>
              <Text style={{fontSize:77,fontWeight:'bold',color:'white'}}>3A</Text>

              </View>
              <View style={styles.CardTextView}>
              <Text style={[styles.TextStyle,styles.RightCardsStyle]}>
              Class 3A
              
                </Text>
               
                </View>
              </View>


            
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
    TextView:{
        flex:0.2,
            justifyContent:'center',
            alignItems:'center',
    },
   
    Images:{
      alignSelf:'center',
      top:8
    },
    ImagesViewFather:{
      backgroundColor:'#2699FB'
      ,width:'140%',
      height:'39%',
      justifyContent:'center'
    },
    ImagesViewMother:
  {backgroundColor:'#2699FB',
  left:10,
  height:'39%',
  justifyContent:'center'
  },
  BigView:
  {flexDirection:'row',justifyContent:'center'},
 TextStyle:
  {
    fontFamily:'Arial',
    fontWeight:'bold',
    fontSize:14,
    color:'#7F7F7F'
  },
  SubTextStyle:{
    fontFamily:'Arial',fontSize:12,color:'#CCCCCC'
  },
 
  CardTextView:{
    top:15
  },
  RightCardsStyle:{
    alignSelf:'center',left:25
  }
 
}
)