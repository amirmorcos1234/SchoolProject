import React,{ Component } from "react";
import { View,StyleSheet,Image,TextInput,ScrollView} from "react-native";
import {Header,Content, Left, Body,Label,DatePicker,CheckBox, Right, Title, Text, Button ,Item,Icon,Input, Card, CardItem, Container, Thumbnail} from "native-base";
export class NewsFeed extends Component{
   
    render(){
        return(
            <Content  style={{backgroundColor:'white'}}>
                
<ScrollView>
<Card noShadow={true} style={{minHeight:428}}>
                            <CardItem style={{width:280,alignContent:'center'}}>
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
                            <CardItem cardBody style={{width:280,left:16,right:10,alignContent:'center'}}>
                            <Text style={{flexWrap:'wrap',textAlignVertical:'center',minWidth:'70%',color:'#2699FB'}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor #incididunt ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo consequat.
                            
                            </Text>
                            </CardItem>
                            <CardItem cardBody style={{width:280,left:16,right:10,alignContent:'center',top:20}}>
                            <Image source={
                                {uri:'https://reactnativecode.com/wp-content/uploads/2018/01/2_img.png'}
                             }style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem style={{width:280,left:16,right:10,alignContent:'center'}}>
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


                    <Card noShadow={true}>
                            <CardItem style={{width:280,alignContent:'center'}}>
                            <Left>
                                <View style={{width: 50, height: 50, borderRadius: 50/2,backgroundColor:'#167ED8',justifyContent:'center'}}>
                                <Icon name="person" style={{color:'white',alignItems:'center',left:15}}></Icon>
                                </View>
                                <Body>
                                <Text style={{color:'#2699FB',fontWeight:'bold'}}>Mr.Ahmed Ali</Text>
                                <Text note style={{color:'#707070',fontSize:8,fontWeight:'bold'}}>Tamem's physics teacher</Text>
                                </Body>
                            </Left>
                                 <Text style={{top:-8,left:15,color:'#2699FB'}}>1h ago</Text>
                            </CardItem>
                            <CardItem cardBody style={{width:280,left:16,right:10,alignContent:'center'}}>
                            <Text style={{flexWrap:'wrap',textAlignVertical:'center',minWidth:'70%',color:'#2699FB'}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor #incididunt ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo consequat.
                            
                            </Text>
                            </CardItem>
                            <CardItem cardBody style={{width:280,left:16,right:10,alignContent:'center',top:20}}>
                            <Image source={
                                {uri:'https://reactnativecode.com/wp-content/uploads/2018/01/2_img.png'}
                             }style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem style={{width:280,left:16,right:10,alignContent:'center'}}>
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



                    <Card noShadow={true}>
                            <CardItem style={{width:280,alignContent:'center'}}>
                            <Left>
                                <View style={{width: 50, height: 50, borderRadius: 50/2,backgroundColor:'#167ED8',justifyContent:'center'}}>
                                <Icon name="person" style={{color:'white',alignItems:'center',left:15}}></Icon>
                                </View>
                                <Body>
                                <Text style={{color:'#2699FB',fontWeight:'bold'}}>Mr.Ahmed Ali</Text>
                                <Text note style={{color:'#707070',fontSize:8,fontWeight:'bold'}}>Tamem's physics teacher</Text>
                                </Body>
                            </Left>
                                 <Text style={{top:-8,left:15,color:'#2699FB'}}>1h ago</Text>
                            </CardItem>
                            <CardItem cardBody style={{width:280,left:16,right:10,alignContent:'center'}}>
                            <Text style={{flexWrap:'wrap',textAlignVertical:'center',minWidth:'70%',color:'#2699FB'}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor #incididunt ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo consequat.
                            
                            </Text>
                            </CardItem>
                            <CardItem cardBody style={{width:280,left:16,right:10,alignContent:'center',top:20}}>
                            <Image source={
                                {uri:'https://reactnativecode.com/wp-content/uploads/2018/01/2_img.png'}
                             }style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem style={{width:280,left:16,right:10,alignContent:'center'}}>
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



                    <Card noShadow={true}>
                            <CardItem style={{width:280,alignContent:'center'}}>
                            <Left>
                                <View style={{width: 50, height: 50, borderRadius: 50/2,backgroundColor:'#167ED8',justifyContent:'center'}}>
                                <Icon name="person" style={{color:'white',alignItems:'center',left:15}}></Icon>
                                </View>
                                <Body>
                                <Text style={{color:'#2699FB',fontWeight:'bold'}}>Mr.Ahmed Ali</Text>
                                <Text note style={{color:'#707070',fontSize:8,fontWeight:'bold'}}>Tamem's physics teacher</Text>
                                </Body>
                            </Left>
                                 <Text style={{top:-8,left:15,color:'#2699FB'}}>1h ago</Text>
                            </CardItem>
                            <CardItem cardBody style={{width:280,left:16,right:10,alignContent:'center'}}>
                            <Text style={{flexWrap:'wrap',textAlignVertical:'center',minWidth:'70%',color:'#2699FB'}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor #incididunt ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo consequat.
                            
                            </Text>
                            </CardItem>
                            <CardItem cardBody style={{width:280,left:16,right:10,alignContent:'center',top:20}}>
                            <Image source={
                                {uri:'https://reactnativecode.com/wp-content/uploads/2018/01/2_img.png'}
                             }style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem style={{width:280,left:16,right:10,alignContent:'center'}}>
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


                    <Card noShadow={true}>
                            <CardItem style={{width:280,alignContent:'center'}}>
                            <Left>
                                <View style={{width: 50, height: 50, borderRadius: 50/2,backgroundColor:'#167ED8',justifyContent:'center'}}>
                                <Icon name="person" style={{color:'white',alignItems:'center',left:15}}></Icon>
                                </View>
                                <Body>
                                <Text style={{color:'#2699FB',fontWeight:'bold'}}>Mr.Ahmed Ali</Text>
                                <Text note style={{color:'#707070',fontSize:8,fontWeight:'bold'}}>Tamem's physics teacher</Text>
                                </Body>
                            </Left>
                                 <Text style={{top:-8,left:15,color:'#2699FB'}}>1h ago</Text>
                            </CardItem>
                            <CardItem cardBody style={{width:280,left:16,right:10,alignContent:'center'}}>
                            <Text style={{flexWrap:'wrap',textAlignVertical:'center',minWidth:'70%',color:'#2699FB'}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor #incididunt ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo consequat.
                            
                            </Text>
                            </CardItem>
                            <CardItem cardBody style={{width:280,left:16,right:10,alignContent:'center',top:20}}>
                            <Image source={
                                {uri:'https://reactnativecode.com/wp-content/uploads/2018/01/2_img.png'}
                             }style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            <CardItem style={{width:280,left:16,right:10,alignContent:'center'}}>
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
