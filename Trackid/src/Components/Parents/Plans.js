import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Card } from "react-native-elements";
import StepIndicator from 'react-native-step-indicator';
import { Container,Header,Content, Left, Body, Right, Title, Text, Button ,Item,Icon,Input,Thumbnail} from "native-base";

export class Plans extends Component {

    constructor() {
        super();
        this.state = { currentPosition: 1 }
    }

    renderSignUpTeacher() {
        this.props.switchScreen('Plans');
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
                        <Title style={[styles.IconColor, styles.Title]}>Plans</Title>
                    </Body>

                </Header>

                <StepIndicator
                    customStyles={customStyles}
                    currentPosition={this.state.currentPosition}
                    labels={labels}
                    stepCount={4}
                />
                <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-evenly', top:50 }}>
                <Image
            source={require('../../images/Plans/100.png')}
            //style={{left:20, top:50}}
            minWidth={152}
            minHeight={186}
            />
            <Image
            source={require('../../images/Plans/200.png')}
           // style={{left:30, top:50}}
            minWidth={152}
            minHeight={186}
            />
            </View>
            <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center', }}>
            <Image
            source={require('../../images/Plans/300.png')}
            //style={{left:80, top:70}}
            minWidth={152}
            minHeight={186}
            />
            </View>
        
        
                    
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