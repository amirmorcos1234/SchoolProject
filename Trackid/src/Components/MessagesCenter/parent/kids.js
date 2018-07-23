import React,{ Component } from "react";
import { View,StyleSheet,Image,TextInput,ScrollView,TouchableOpacity} from "react-native";
import {Header,Content, Left, Body,Label,DatePicker,CheckBox, Right, Title, Text, Button ,Item,Icon,Input, Card, CardItem, Container, Thumbnail} from "native-base";
export class Kids extends Component{
   
    render(){

        return(
            <Content  style={{backgroundColor:'white',alignSelf:'center',minWidth:300}}>
            <Item regular style={{borderColor:'#7FC4FD'}}> 
                <Input style={{color:'#2699FB',borderColor:'#7FC4FD',height:48,width:343}} placeholderTextColor='#2699FB' placeholder='type here ...' />
                <Icon active style={{color:'#2699FB'}} minHeight={15} minWidth={15} name='search' />
            </Item>   
            
        <View style={[styles.BigView,{top:15}]}>


            <View style={{flexDirection:'column'}}>
                <View style={{ backgroundColor:'#2699FB',width:152,height:186}}>
                <Image source={require('../../../images/SignUPAs/father.png')} style={styles.Images}/>
                </View>
                <View style={styles.CardTextView}>
                <Text style={styles.TextStyle}> Tamem </Text>
                </View>
            </View>
            
            <View style={{flexDirection:'column'}}>
                <View >
                <Image source={require('../../../images/SignUPAs/father.png')}style={styles.Images}/>
                </View>
                
                <View style={styles.CardTextView}>
                <Text style={[styles.TextStyle,styles.RightCardsStyle]}>Tameem</Text>
                </View>
            </View>



        </View>

        <View style={[styles.BigView,{top:15}]}>
                    <View style={{flexDirection:'column'}}>
                        <View >
                        <Image source={require('../../../images/SignUPAs/father.png')} style={styles.Images}/>
                        </View>
                        <View style={styles.CardTextView}>
                        <Text style={styles.TextStyle}> Tamem </Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'column'}}>
                        <View >
                        <Image source={require('../../../images/SignUPAs/father.png')}style={styles.Images}/>
                        </View>
                        
                        <View style={styles.CardTextView}>
                        <Text style={[styles.TextStyle,styles.RightCardsStyle]}>Tameem</Text>
                        </View>
                    </View>
       </View>

            

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
        IamText:{
            color:'#2699FB',
            fontFamily:'Raleway-Medium',
            fontSize:29,
            top:45     
        },
        Images:{
          alignSelf:'center',
          top:8
        },
        ImagesViewFather:{
          backgroundColor:'#2699FB',
        //   width:152,
        //   height:120
        //   width:'120%',
        //   height:'50%',
        // ,right:50,
        
          justifyContent:'center'
        },
        ImagesViewMother:
      {
          backgroundColor:'#2699FB',
    //   left:10,
    // width:'140%',
    //   height:'50%',
            // width:152,
        //   height:120,
        justifyContent:'center'
      },
      BigView:
      {
          flexDirection:'row',justifyContent:'center'
      },
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
        top:20
      },
      RightCardsStyle:{
        alignSelf:'center',left:25
      }
}
)
