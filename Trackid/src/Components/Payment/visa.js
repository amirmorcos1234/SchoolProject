import StepIndicator from 'react-native-step-indicator';
import React,{ Component } from "react";
import { View,StyleSheet,Image,TextInput} from "react-native";
import {Header,Content, Left, Body,Label,DatePicker,CheckBox, Right, Title, Text, Button ,Item,Icon,Input, Card, CardItem, Container, Thumbnail} from "native-base";
export class Visa extends Component{
 
    constructor() {
        super();
        this.state = { currentPosition: 2, chosenDate: new Date() }
        this.setDate = this.setDate.bind(this);

    }
    onPageChange(position) {
        this.setState({ currentPosition: position });
    }

      setDate(newDate) {
        this.setState({ chosenDate: newDate });
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
                        <Title style={[styles.IconColor, styles.Title]}>Check Out</Title>
                    </Body>

                </Header>
                

                      <StepIndicator
                    customStyles={customStyles}
                    currentPosition={this.state.currentPosition}
                    labels={labels}
                    stepCount={4}
                    style={{top:15}}
                    />

                    <View style={{flexDirection:'row',top:40}}>
                    <Image style={{flex:0.4,width:110,right:5,height:30}} source={require('../../images/Cards/fawry.png')}>

                    </Image>

                    <Image style={{flex:0.4,width:110,right:5,left:60,height:35}} source={require('../../images/Cards/visa.png')}>

                    </Image>
                    </View>
                    <Image style={{width:60,right:5,height:60,alignSelf:'center'}} source={require('../../images/Cards/vodafonelogo.png')}>

                    </Image>


                    <View style={{top:20,width:300,left:20,right:20}}>
                         {/* <Item stackedLabel> */}
                                <Label style={{color:'#167ED8'}}>CARD NUMBER</Label>
                                <TextInput style={{color:'#167ED8',top:-10,width:250}} defaultValue="1234     5678   3456   2456"/>
                         {/* </Item> */}
                    </View>


<View style={{flexDirection:'row',top:25,left:10}}>
<View style={{flex:0.4}}>
<Text style={{color: "#167ED8" ,left:9}}>EXPIRE DATE</Text>
<Item>
<DatePicker
                            defaultDate={new Date(2018, 4, 4)}
                            minimumDate={new Date(2018, 1, 1)}
                            maximumDate={new Date(2018, 12, 31)}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Select date"
                            textStyle={{ color: "#167ED8" }}
                            placeHolderTextStyle={{ color: "#167ED8" }}
                            onDateChange={this.setDate}
                            style={{flex:0.4}}
                            />
</Item>


</View>

                             {/* <Item stackedLabel style={{flex:0.4}}> */}
                              <View style={{flex:0.4}}>
                                <Text style={{color:'#167ED8'}}>CVV</Text>
                                <TextInput style={{color:'#167ED8',textDecorationColor:'#167ED8',textShadowColor:"#167ED8",shadowColor:'#167ED8'}} defaultValue="1234"/>
                              </View>
                               
                             {/* </Item> */}

</View>
              

                      <View style={{top:40,width:300,left:20,right:20}}>
                         {/* <Item stackedLabel> */}
                                <Label style={{color:'#167ED8'}}>CARDHOLDER NAME</Label>
                                <TextInput style={{color:'#167ED8',top:-10,width:250}} defaultValue="Mahmoud Ashraf"/>
                         {/* </Item> */}
                    </View>

                        <View style={{flexDirection:'row',flex:1,top:70,left:10}} >
                                    <CheckBox style={{color:'#167ED8'}} checked={true} />
                                    <Text style={{color:'#167ED8',flex:0.5,left:10}}>SAVE CARD</Text>
                        </View>

              

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