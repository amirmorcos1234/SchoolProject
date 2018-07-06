import React, { Component } from "react";
import { View, StyleSheet, Image,AppRegistry } from "react-native";
import { Card } from "react-native-elements";
import StepIndicator from 'react-native-step-indicator';
import { Container,Header,Content, Left, Body, Right, Title, Text, Button ,Item,Icon,Input,Tab, Tabs, TabHeading,} from "native-base";
//import Tab1 from './tabOne';
//import Tab2 from './tabTwo';
//import Tab3 from './tabThree';
//import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
//import Tabs from 'react-native-tabs';
export class Payment extends Component {

    constructor() {
        super();
        this.state = { currentPosition: 2 }
    }
    renderPayment() {
        this.props.switchScreen('Payment');
    }


    render() {
        return (
            <Container
                style={{ backgroundColor: 'white' }}
            >
                <Header transparent hasTabs>
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
                
                
        <Tabs  >
          <Tab heading={ <TabHeading><Image
            source={require('../../images/payment/visa.png')}
            minWidth={77}
            minHeight={23}
            name="first"
            /></TabHeading>}>
            <Tab />
          </Tab>
          <Tab heading={ <TabHeading><Image
            source={require('../../images/payment/vf.png')}
            minWidth={77}
            minHeight={23}
            name="second"
            /></TabHeading>}>
            <Tab />
          </Tab>
          <Tab heading={ <TabHeading><Image
            source={require('../../images/payment/Fawry.png')}
            minWidth={77}
            minHeight={23}
            name="third"
            /></TabHeading>}>
            <Tab />
          </Tab>
        </Tabs>
                    
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
//AppRegistry.registerComponent('Payment', () => Payment);

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