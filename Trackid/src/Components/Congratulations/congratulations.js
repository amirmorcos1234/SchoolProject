import React,{ Component } from "react";
import { View,StyleSheet,Image,Text} from "react-native";
import { Container, Header, Content, Item, Input, Icon, Left, Button, Body, Title } from 'native-base';
export class Congratulations extends Component{
render(){
    return(
        <View style={styles.container}>
            <Icon name='checkmark-circle' style={{color:'white',fontSize:150}} />
            <Text style={styles.CongratulationsText}>
                Congratulations
                </Text>
                <Text style={styles.SubText}>
                    You successfully created 
                    </Text>
                    <Text style={styles.SubText}>
                    your tracKid account
                        
                        </Text>
                        <Button  style={styles.Button}>
                            <Text style={styles.ContinueText}>
                                Continue
                                </Text>
                            </Button>
        </View>
    )
}
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'#167ED8',
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    CongratulationsText:{
        fontSize:37,
        fontFamily:'Arial',
        fontWeight:'bold',
        color:'#FFFFFF'
    },
    SubText:{
        fontSize:15,
        fontFamily:'Arial',
        fontWeight:'bold',
        color:'#FFFFFF',
        top:20
    },
    Button:{
borderRadius:5,
borderWidth:2,
    borderColor:'white',
    top:40,left:'20%',
    width:'35%',
    backgroundColor:'white'
    },
    ContinueText:{
        left:27,
        color:'#167ED8'
    }
});