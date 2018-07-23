import React,{ Component } from "react";
import { View,StyleSheet,Image,TextInput,ScrollView} from "react-native";
import {Header,Content, Left, Body,Label,DatePicker,CheckBox, Right, Title, Text, Button ,List,Item,Icon,Input, Card, CardItem, Container, Thumbnail, ListItem} from "native-base";
export class Search extends Component{
   
    render(){
        var items = [
            'Simon Mignolet',
            'Nathaniel Clyne',
            'Dejan Lovren',
            'Mama Sakho',
            'Emre Can'
          ];
        return(
            <Content style={{backgroundColor:'white',alignSelf:'center',width:300,flex:1}}>
             <Item regular style={{borderColor:'#7FC4FD'}}> 
                <Input style={{color:'#2699FB',borderColor:'#7FC4FD',height:40}} placeholderTextColor='#2699FB' placeholder='type here ...' />
                <Icon active style={{color:'#2699FB'}} minHeight={15} minWidth={15} name='search' />
            </Item>

            <ScrollView style={{top:20}}>
                <List style={{left:-10}}>
                 <ListItem  noIndent style={{backgroundColor:'#F1F9FF',minHeight:48,borderColor:'white'}}>
                    <Text style={{color:'#2699FB',fontSize:14,fontStyle:'normal',left:5}}>Mr. Ahmed Ali <Text style={{color:'#707070',fontSize:8}}>Physics Teacher</Text></Text>
                 </ListItem>

                 <ListItem  noIndent style={{backgroundColor:'#F1F9FF',minHeight:48,borderColor:'white'}}>
                    <Text style={{color:'#2699FB',fontSize:14,fontStyle:'normal',left:5}}>Mr. Ahmed Ali <Text style={{color:'#707070',fontSize:8}}>Physics Teacher</Text></Text>
                 </ListItem>


                 <ListItem  noIndent style={{backgroundColor:'#F1F9FF',minHeight:48,borderColor:'white'}}>
                    <Text style={{color:'#2699FB',fontSize:14,fontStyle:'normal',left:5}}>Mr. Ahmed Ali <Text style={{color:'#707070',fontSize:8}}>Physics Teacher</Text></Text>
                 </ListItem>

                 <ListItem  noIndent style={{backgroundColor:'#F1F9FF',minHeight:48,borderColor:'white'}}>
                    <Text style={{color:'#2699FB',fontSize:14,fontStyle:'normal',left:5}}>Mr. Ahmed Ali <Text style={{color:'#707070',fontSize:8}}>Physics Teacher</Text></Text>
                 </ListItem>
                
                </List>


                <View style={{top:15,bottom:10}}>
                <Text style={{color:'#707070',fontSize:13,fontWeight:'bold'}}>Recent Search</Text>
                </View>


          <List   style={{top:15}} dataArray={items}
            renderRow={(item) =>
              <ListItem noIndent style={{minHeight:48,borderColor:'#F1F9FF'}}>
                    <Left>
                        <Text style={{color:'#2699FB',fontSize:14,fontStyle:'normal',left:5}}>{item}</Text>
                    </Left>
                    <Right>
                        <Icon style={{color:'#BCE0FD'}} minHeight={15.9} minWidth={15.9} name="search" />
                    </Right>
                </ListItem>
            }>
          </List>
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
