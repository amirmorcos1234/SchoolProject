import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Card } from "react-native-elements";
import StepIndicator from 'react-native-step-indicator';
import { Container, Header, Content, Left, Body, Right, Title, Text, Button, Icon, Thumbnail } from "native-base";

export class Pinfo extends Component {

    constructor() {
        super();
        this.state = { currentPosition: 0 }
    }
    renderSignUpTeacher() {
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