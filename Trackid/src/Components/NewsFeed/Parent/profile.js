import React,{ Component } from "react";
import { View,StyleSheet,Image,TextInput,ScrollView} from "react-native";
import {Header,Content, Left, Body,Label,DatePicker,CheckBox, Right, Title, Text, Button ,Item,Icon,Input, Card, CardItem, Container, Thumbnail, Badge} from "native-base";
export class Profile extends Component{
   
    render(){
        return(
            <Content>
                <ScrollView>
                    <View style={{backgroundColor:'#BCE0FD',minHeight:136,flex:1}}>
                    <Image source={require('../../../images/Logo/Union1.png')} style={{alignSelf:'stretch'}}></Image>
                   </View>
                <View style={{backgroundColor:'white',alignSelf:'center',width:300,flex:1}}>
                        <View style={{top:15,left:15}}>
                            <Text style={{color:'#2699FB',fontSize:20,fontWeight:'bold'}}>Mahmoud Ashraf</Text>
                            <Text note style={{color:'#2699FB',fontSize:10}}>Qena,Egypt</Text>
                        </View>


                        <View style={{flexDirection:'row',top:15}}>
                        <Card transparent  style={{Height:109,minWidth:109}}>
                            <CardItem style={{backgroundColor:'#F1F9FF',height:109}}>
                                <Left>
                                    <Body>
                                        <Text style={{color:'#2699FB',fontSize:20}}>4 </Text>
                                        <Text note style={{color:'#2699FB',fontSize:10,fontWeight:'bold'}}>Kids</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </Card>



                        <Card transparent style={{maxHeight:109,minWidth:226}}>
                            <CardItem style={{backgroundColor:'#F1F9FF'}}>
                                <Left>
                                    <Body>
                                        <Text style={{color:'#2699FB',fontSize:14,fontWeight:'bold'}}>Bio </Text>
                                        <Text note  numberOfLines={4}  style={{right:10,color:'#2699FB',fontSize:14,justifyContent:"center",alignContent:'center',alignItems:'center',alignSelf:'center',textAlign:'center'}}>some text some text some text some text some text some text some text some text some text some text some text </Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </Card>
                </View>

                     <View style={{top:15}}>
                        <Card transparent  style={{Height:109,minWidth:343}}>
                            <CardItem style={{backgroundColor:'#F1F9FF'}}>
                            <Text style={{color:'#2699FB',fontSize:14,fontWeight:'bold'}}>Personal Info</Text>
                            <Right style={{left:15}}>
                                <Icon style={{color:'#BCE0FD',right:10}} name="create"  onPress={() => alert("This is Card Header")}/>
                            </Right>
                            </CardItem>
                       
                        <CardItem style={{backgroundColor:'#F1F9FF'}}>
                            <Left>
                                <Icon  name='call' style={{color:'#2699FB'}}></Icon>
                                <Body>
                                    <Text style={{fontSize:14,color:'#2699FB'}}>011111111111</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        
                         <CardItem style={{backgroundColor:'#F1F9FF'}}>
                            <Left>
                                <Icon  name='mail' style={{color:'#2699FB'}}></Icon>
                                <Body>
                                    <Text style={{fontSize:14,color:'#2699FB'}}>mahmoud@gmail.com</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        </Card>
                </View>
         <View style={{top:15}}>
                           <Card transparent  style={{Height:109,minWidth:343}}>
                            <CardItem style={{backgroundColor:'#F1F9FF'}}>
                            <Text style={{color:'#2699FB',fontSize:14,fontWeight:'bold'}}>Kids</Text>
                            </CardItem>
                           
                            <CardItem style={{backgroundColor:'#F1F9FF'}}>
                           
                           <Badge rounded style={{backgroundColor:'#BCE0FD',borderRadius:30,width:40,height:40}}></Badge>
                           <Badge rounded style={{backgroundColor:'#BCE0FD',borderRadius:30,width:40,height:40,left:10}}></Badge>
                           <Badge rounded style={{backgroundColor:'#BCE0FD',borderRadius:30,width:40,height:40,left:20}}></Badge>
                           <Badge rounded style={{backgroundColor:'#BCE0FD',borderRadius:30,width:40,height:40,left:30}}></Badge>
                        
                        <Right>
                        <Button rounded style={{width:71,height:40,backgroundColor:'#2699FB',justifyContent:'center',right:5}}><Text>ADD</Text></Button>
                        </Right>
                           
                            </CardItem>
                           
                           
                           
                           
                           
                            </Card> 
                </View>

                </View>
                </ScrollView>
               
            </Content>
               

            
        )
    }
}
const styles=StyleSheet.create({
}
)
