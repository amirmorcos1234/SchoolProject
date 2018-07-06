import React,{ Component } from "react";
import { View,StyleSheet,Image } from "react-native";
import { Container,Header,Content, Left, Body, Right, Title, Text, Button ,Item,Icon,Input, Card} from "native-base";
export class CheckOut extends Component{
    
    render(){
        return(
            <View>
                <Card>
                    <Left>
                        <Text>Personal Info</Text>
                    </Left>
                    <Body>
                        <Item>
                            <Icon name="person"></Icon>
                            <Input/>
                        </Item>
                        <Item>
                            <Icon name="person"></Icon>
                            <Input/>
                        </Item>
                    </Body>
                    <Right>
                        <Button>
                            <Icon name="pen"></Icon>
                        </Button>
                    </Right>
                </Card>
            </View>
               

            
        )
    }
}
const styles=StyleSheet.create({
  background:{
    backgroundColor:'white'
  }
}
)