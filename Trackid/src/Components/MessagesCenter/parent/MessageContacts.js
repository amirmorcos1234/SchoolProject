import React,{ Component } from "react";
import { View,StyleSheet,Image,TouchableOpacity,ScrollView } from "react-native";
import { Container,Header,Content, Left, Body, Right, Title, Text, Button, Icon, Thumbnail, Item, Input, Card, CardItem, List, ListItem } from "native-base";

export class MessageContacts extends Component{
 
render(){
    return(
        <Container>
        <Header searchBar  transparent>
          <Item>
            <Input placeholder="Search" />
            <Icon name="ios-search" />
            
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
        <List horizontal>
        <ListItem itemHeader first>
              <Text>A</Text>
            </ListItem>
            <ListItem >
             <View style={{backgroundColor:'#F1F9FF',width:'40%',height:'140%',flexDirection:'row'}}>
             <View style={{top:'15%'}}>
                 <Button rounded style={{backgroundColor:'#2699FB',left:'50%'}}>
                 <Icon name='person'/>
                 </Button>
                 <Text style={{left:'50%'}}>
                     Ahmed Ali
                     </Text>
                     </View>
                     {/* <View style={{top:'15%'}}>
                 <Button rounded style={{backgroundColor:'#2699FB',left:'60%'}}>
                 <Icon name='person'/>
                 </Button>
                 <Text>
                     Ahmed Ali
                     </Text>
                     </View> */}
                 </View>
            </ListItem>
         
            <ListItem itemHeader first>
              <Text>B</Text>
            </ListItem>
            <ListItem>
            <View style={{backgroundColor:'#F1F9FF',width:'40%',height:'140%',flexDirection:'row'}}>
             <View style={{top:'15%'}}>
                 <Button rounded style={{backgroundColor:'#2699FB',left:'50%'}}>
                 <Icon name='person'/>
                 </Button>
                 <Text style={{left:'50%'}}>
                   Bassem Ali
                     </Text>
                     </View>
                     </View>
            </ListItem>
          </List>
        </Content>
      </Container>
      
    )
}
}
const styles=StyleSheet.create(
    {
        IconColor:{
             backgroundColor:'#2699FB',
            color:'#FFFFFF'
        },
        card:{
            backgroundColor:'black',
            top:'20%'
        },

}
)