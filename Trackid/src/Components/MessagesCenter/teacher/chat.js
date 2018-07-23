import React,{ Component } from "react";
import { View,StyleSheet,Image,TouchableOpacity } from "react-native";
import { Container,Header,Content, Left, Body, Right, Title, Text, Button, Icon, Thumbnail,Item,Input } from "native-base";

export class Chat extends Component{
 state={note:"Tamem's Teacher Chat",title:"Mr.Ahmed Ali"}
render(){
    return(
    <Container style={{backgroundColor:'white'}}>
        <Header transparent>
                    <Left>
                        <Button transparent >
                            <Icon style={{width:16,height:21.5 ,color:"#2699FB",top:-3}} name="arrow-back"></Icon>
                        </Button>
                    </Left>
                    <Body style={{alignSelf:'center'}}>
                        <Title style={[styles.IconColor, styles.Title]}>{this.state.title}</Title>
                        <Text note style={{fontSize:10,fontWeight:'bold',color:'#707070'}}>{this.state.note}</Text>
                    </Body>
                    <Right style={{flexDirection:'row',left:37}}>
                        <Button transparent>
                        <Icon style={{height:21.5,width:16,color:'#2699FB'}} name="call"></Icon>
                         </Button>
                         <Button transparent>
                         <Icon  style={{height:21.5,width:19,color:'#2699FB',left:-8}} name="videocam"></Icon>
                         </Button>
                         <Button transparent>
                         <Icon  style={{height:21.5,width:21,color:'#2699FB',left:-18}} name="information-circle"></Icon>
                         </Button>
                    </Right>
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
      right:'10%'
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