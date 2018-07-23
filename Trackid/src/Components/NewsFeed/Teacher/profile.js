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
                            <Text note style={{color:'#2699FB',fontSize:10}}>Technology Teacher, The Red Sea STEM School</Text>
                        </View>


                        <View style={{flexDirection:'row',top:15}}>
                        <Card transparent  style={{Height:109,flex:0.33}}>
                            <CardItem style={{backgroundColor:'#F1F9FF',height:109}}>
                                <Left>
                                    <Body>
                                        <Text style={{color:'#2699FB',fontSize:20}}>4 </Text>
                                        <Text note style={{color:'#2699FB',fontSize:10,fontWeight:'bold'}}>Kids</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </Card>

                         <Card transparent  style={{Height:109,flex:0.33}}>
                            <CardItem style={{backgroundColor:'#F1F9FF',height:109}}>
                                <Left>
                                    <Body>
                                        <Text style={{color:'#2699FB',fontSize:20}}>240 </Text>
                                        <Text note style={{color:'#2699FB',fontSize:10,fontWeight:'bold',width:64}}>Followers</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </Card>

                         <Card transparent  style={{Height:109,flex:0.33}}>
                            <CardItem style={{backgroundColor:'#F1F9FF',height:109}}>
                                <Left>
                                    <Body>
                                        <Text style={{color:'#2699FB',fontSize:20}}>890 </Text>
                                        <Text note style={{color:'#2699FB',fontSize:10,fontWeight:'bold',width:64}}>Following</Text>
                                    </Body>
                                </Left>
                            </CardItem>

                        </Card>

                      
                </View>

                     <View style={{top:15}}>
                     <Card transparent style={{maxHeight:109,minWidth:226}}>
                            <CardItem style={{backgroundColor:'#F1F9FF'}}>
                               <Left>
                               <Text style={{color:'#2699FB',fontSize:14,fontWeight:'bold'}}>Bio & Contact Info</Text>

                               </Left>
                              
                                <Right style={{left:15}}>
                                <Icon style={{color:'#BCE0FD',right:10}} name="create"  onPress={() => alert("This is Card Header")}/>
                                </Right>


                               
                            </CardItem>
                           
                            <CardItem style={{backgroundColor:'#F1F9FF',top:-10}}>
                            <Body>
                            <Text note  numberOfLines={2}  style={{right:10,color:'#2699FB',fontSize:14,justifyContent:"center",alignContent:'center',alignItems:'center',alignSelf:'center',textAlign:'center'}}>some text some text some text some text some text some text some text some text some text some text some text </Text>
                            </Body>
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
                <Text style={{fontSize:14,color:'#707070',fontWeight:'bold'}}>Recent Posts</Text>
                <Card noShadow={true} style={{minHeight:428}}>
                            <CardItem style={{width:270,alignContent:'center'}}>
                            <Left>
                                <View style={{width: 50, height: 50, borderRadius: 50/2,backgroundColor:'#2699FB',justifyContent:'center'}}>
                                <Icon name="person" style={{color:'white',alignItems:'center',left:15}}></Icon>
                                </View>
                                <Body>
                                <Text style={{color:'#2699FB',fontWeight:'bold'}}>Mr.Ahmed Ali</Text>
                                <Text note style={{color:'#707070',fontSize:8,fontWeight:'bold'}}>Tamem's physics teacher</Text>
                                </Body>
                            </Left>
                                 <Text style={{top:-8,left:15,color:'#2699FB'}}>1h ago</Text>
                            </CardItem>
                            <CardItem cardBody style={{width:270,left:13,right:10,alignContent:'center'}}>
                            <Text style={{flexWrap:'wrap',textAlignVertical:'center',Width:'60%',color:'#2699FB',fontSize:14}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                            tempor #incididunt ero labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo consequat.
                            
                            </Text>
                            </CardItem>
                            <CardItem cardBody style={{width:270,left:13,right:10,alignContent:'center',top:20}}>
                            <Image source={
                                {uri:'https://reactnativecode.com/wp-content/uploads/2018/01/2_img.png'}
                             }style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem style={{width:270,left:13,right:10,alignContent:'center'}}>
                            <Left>
                                <Button transparent>
                                <Icon active name="heart" />
                                <Text style={{fontWeight:'bold'}}>12</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Button transparent>
                                <Image source={require('../../../images/Icons/drawable-hdpi/Chat.png')} style={{width:16,height:16}}></Image>
                                <Text style={{fontWeight:'bold'}}>4</Text>
                                </Button>
                            </Body>
                            <Right>
                                <Text style={{color:'#2699FB',fontSize:14,fontWeight:'bold'}}>Comment</Text>
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
