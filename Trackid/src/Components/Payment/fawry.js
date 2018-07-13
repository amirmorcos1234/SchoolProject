import StepIndicator from 'react-native-step-indicator';
import React,{ Component } from "react";
import { View,StyleSheet,Image,TextInput} from "react-native";
import {Header,Content, Left, Body,Label, Right, Title, Text, Button ,Item,Icon,Input, Card, CardItem, Container, Thumbnail} from "native-base";
export class Fawry extends Component{

    constructor() {
        super();
        this.state = { currentPosition: 2 }
    }
    onPageChange(position) {
        this.setState({ currentPosition: position });
    }

    render(){
        return(
            <Container style={{backgroundColor:'white'}}>
                <Header transparent>
                    <Left>
                        <Button transparent >
                            <Icon name='arrow-back' style={styles.IconColor} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={[styles.IconColor, styles.Title]}>Payment</Title>
                    </Body>

                </Header>
                <Content style={{top:20,left:7,right:7}}>


                      <StepIndicator
                    customStyles={customStyles}
                    currentPosition={this.state.currentPosition}
                    labels={labels}
                    stepCount={4}
                    />

                    <View style={{flexDirection:'row',top:40}}>
                    <Image style={{flex:0.4,width:110,right:5,height:30}} source={require('../../images/Cards/fawry.png')}>

                    </Image>

                    <Image style={{flex:0.4,width:110,right:5,left:60,height:35}} source={require('../../images/Cards/visa.png')}>

                    </Image>
                    </View>
                    <Image style={{width:60,right:5,height:60,alignSelf:'center'}} source={require('../../images/Cards/vodafonelogo.png')}>

                    </Image>

                    <View style={{justifyContent:'center',top:20,alignContent:'center',flexWrap:'wrap',alignItems:'center',alignSelf:'center'}}>
                    <Text style={{color:'#167ED8',justifyContent:'center'}}>Go to the nearest shop that has fawry </Text>
                    <Text style={{color:'#167ED8'}}>and buy "plan name" code.</Text>
                   
                    </View>

                    <View style={{top:30,width:300,left:20,right:20}}>
                         <Item stackedLabel>
                                <Label style={{color:'#167ED8'}}>Code</Label>
                                <TextInput style={{color:'#167ED8',top:-10}} defaultValue="1234     5678   3456   2456"/>
                         </Item>
                    </View>


                </Content>
                <Button style={{  alignItems:'stretch',alignContent:'stretch',alignSelf:'stretch',justifyContent:'center', backgroundColor:'#167ED8'}}>
                            <Text style={{top:7}}>Pay Secure</Text>
                        </Button>
            </Container>



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
        right: '20%'
    },

}
)

const labels = ["Personal Info", "Plans", "Payment", " Checkout"];
const customStyles = {
    stepIndicatorSize: 16,
    currentStepIndicatorSize: 16,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 2,
    stepStrokeCurrentColor: '#2699FB',
    stepStrokeWidth: 1,
    stepStrokeFinishedColor: '#2699FB',
    stepStrokeUnFinishedColor: '#dedede',
    separatorFinishedColor: '#2699FB',
    separatorUnFinishedColor: '#F1F9FF',
    stepIndicatorFinishedColor: '#2699FB',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#2699FB',
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
    stepIndicatorLabelCurrentColor: 'transparent',
    stepIndicatorLabelFinishedColor: 'transparent',
    stepIndicatorLabelUnFinishedColor: 'transparent',
    labelColor: '#2699FB',
    labelSize: 10,
    currentStepLabelColor: '#2699FB'
}