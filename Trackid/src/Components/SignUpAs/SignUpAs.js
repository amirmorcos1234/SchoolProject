import React,{ Component } from "react";
import { View,StyleSheet,Image } from "react-native";
import { Container,Header,Content, Left, Body, Right, Title, Text, Button, Icon, Thumbnail } from "native-base";

export class SignUpAs extends Component{
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
            <Title style={[styles.IconColor,styles.Title]}>Sign up As?</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <View style={styles.TextView}>
        <Text style={styles.IamText}>
            I Am a
            </Text>
            </View>
           
            <View style={[styles.BigView,{top:100}]}>
            <View style={{flexDirection:'column'}}>
            <View style={[styles.ImagesViewFather,{right:50}]}>
              <Image
              source={require('../../images/SignUPAs/father.png')}
              style={styles.Images}
              />
              </View>
              <View style={styles.CardTextView}>
              <Text style={styles.TextStyle}>
                Father
                </Text>
                <Text style={[styles.SubTextStyle,{right:5}]}>
                Learn more
                </Text>
                </View>
                </View>
            <View style={{flexDirection:'column'}}>
                
              <View style={[styles.ImagesViewMother,{width:'140%'}]}>
              <Image
              source={require('../../images/SignUPAs/mother.png')}
              style={styles.Images}
              />
              </View>
              <View style={styles.CardTextView}>
              <Text style={[styles.TextStyle,styles.RightCardsStyle]}>
                Mother
                </Text>
                <Text style={[styles.SubTextStyle,styles.RightCardsStyle]}>
                Learn more
                </Text>
                </View>
              </View>
              </View>


              <View style={styles.BigView}>
            <View style={{flexDirection:'column'}}>
            <View style={[styles.ImagesViewFather,{right:50}]}>
              <Image
              source={require('../../images/SignUPAs/teacher.png')}
              style={styles.Images}
              />
              </View>
              <View style={styles.CardTextView}>
              <Text style={styles.TextStyle}>
                Teacher
                </Text>
                <Text style={[styles.SubTextStyle,{right:5}]}>
                Learn more
                </Text>
                </View>
                </View>
            <View style={{flexDirection:'column'}}>
                
              <View style={[styles.ImagesViewMother,{width:'140%'}]}>
              <Image
              source={require('../../images/SignUPAs/professor.png')}
              style={styles.Images}
              />
              </View>
              <View style={styles.CardTextView}>
              <Text style={[styles.TextStyle,styles.RightCardsStyle]}>
                School Admin
                </Text>
                <Text style={[styles.SubTextStyle,styles.RightCardsStyle]}>
                Learn more
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
      left:'28%'
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
    top:20
  },
  RightCardsStyle:{
    alignSelf:'center',left:25
  }
 
}
)