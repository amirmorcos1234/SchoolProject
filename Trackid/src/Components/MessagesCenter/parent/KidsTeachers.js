import React,{ Component } from "react";
import { View,StyleSheet,Image,TouchableOpacity,ScrollView } from "react-native";
import { Container,Header,Content, Left, Body, Right, Title, Text, Button, Icon, Thumbnail, Item, Input, Card, CardItem } from "native-base";

export class KidsTeachers extends Component{
 
render(){
    return(
        <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <ScrollView>
        <Content>
          <Card style={{backgroundColor:'orange'}}>
            <CardItem header>
            <View style={{flexDirection:'row'}}>
            <Button rounded light>
            <Icon name='person' style={styles.IconColor}/>
          </Button>
          <View style={{flexDirection:'column',left:'60%'}}>
          <Text>
              Mr.ahmed Ali
              </Text>
              <Text>
                  Tameem's physics Teacher
                  </Text>
              </View>
              
          </View>
           
            </CardItem>
           
         </Card>
        </Content>
            </ScrollView>
      </Container>
      
        /* <View style={styles.TextView}>
        <Text style={styles.IamText}>
            I Am a
            </Text>
            </View>
           
            <View style={[styles.BigView,{top:100}]}>
            <View style={{flexDirection:'column'}}>
            <View style={[styles.ImagesViewFather,{right:50}]}>
              <Image
              source={require('../../../images/SignUPAs/father.png')}
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
               source={require('../../../images/SignUPAs/father.png')}
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
            <TouchableOpacity onPress={()=>this.renderSignUpTeacher()}
            activeOpacity={0.1}
            >
              <Image
               source={require('../../../images/SignUPAs/father.png')}
              style={styles.Images}
              />
                </TouchableOpacity>
              
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
               source={require('../../../images/SignUPAs/father.png')}
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
              </View> */

    //   </Container>
    )
}
}
const styles=StyleSheet.create(
    {
        IconColor:{
            backgroundColor:'#2699FB',
            color:'white'
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