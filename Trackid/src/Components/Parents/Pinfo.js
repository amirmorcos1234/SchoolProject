import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Card } from "react-native-elements";
import StepIndicator from 'react-native-step-indicator';
//import { Container, Header, Content, Left, Body, Right, Title, Text, Button, Icon, Thumbnail } from "native-base";
import { Container,Header,Content, Left, Body, Right, Title, Text, Button ,Item,Icon,Input,Thumbnail} from "native-base";

export class Pinfo extends Component {

    constructor() {
        super();
        this.state = { currentPosition: 0 }
    }

    renderSignUpParents() {
        this.props.switchScreen('Pinfo');
    }


    render() {
        return (
            <Container
                style={{ backgroundColor: 'white' }}
            >
                <Header transparent>
                    <Left>
                        <Button transparent >
                            <Icon name='arrow-back' style={styles.IconColor} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={[styles.IconColor, styles.Title]}>Personal Info</Title>
                    </Body>

                </Header>

                <StepIndicator
                    customStyles={customStyles}
                    currentPosition={this.state.currentPosition}
                    labels={labels}
                    stepCount={4}
                />
            
            <Item style={{justifyContent:'center',alignSelf:'center',width:327,top:30}}>
                                        <Icon  name="person" style={{color:'#167ED8'}}></Icon>
                                        <Input placeholder='User Name' placeholderTextColor='#167ED8' /> 
                            </Item>
            <Item style={{justifyContent:'center',alignSelf:'center',width:327,top:40}}>
                                        <Icon  name='mail' style={{color:'#167ED8'}}></Icon>
                                        <Input placeholder='example@abc.com' placeholderTextColor='#167ED8'/> 
                            </Item>

                            <Item style={{justifyContent:'center',alignSelf:'center',width:327,top:50}}>
                                        <Icon  name='lock' style={{color:'#167ED8'}}></Icon>
                                        <Input placeholder='*********' placeholderTextColor='#167ED8' style={{color:'#167ED8'}} secureTextEntry/> 
                            </Item>
                            <Item style={{justifyContent:'center',alignSelf:'center',width:327,top:60}}>
                                        <Icon  name='lock' style={{color:'#167ED8'}}></Icon>
                                        <Input placeholder='*********' placeholderTextColor='#167ED8' secureTextEntry/> 
                            </Item>

                        <Button style={{justifyContent:'center',alignSelf:'center',top:80,width:327,backgroundColor:'#167ED8'}}>
                            <Text>Continue</Text>
                        </Button>

                        <Button transparent style={{justifyContent:'center',alignSelf:'center', top:110,width:270}}>
                            <Text style={{color:'#167ED8'}}>Already have an account</Text>
                        </Button>
                        <Button style={{  alignItems:'stretch',alignContent:'stretch',alignSelf:'stretch',top:135,justifyContent:'center', backgroundColor:'#167ED8'}}>
                            <Text style={{top:5}} >Sign In</Text>
                        </Button>
                    
            </Container>

        )

    }
    onPageChange(position) {
        this.setState({ currentPosition: position });
    }


}
const styles = StyleSheet.create(
    {
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