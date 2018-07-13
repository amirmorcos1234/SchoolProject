import StepIndicator from 'react-native-step-indicator';
import React,{ Component } from "react";
import { View,StyleSheet,Image} from "react-native";
import {Header,Content, Left, Body, Right, Title, Text, Button ,Item,Icon,Input, Card, CardItem, Container, Thumbnail} from "native-base";
export class CheckOut extends Component{
 
    constructor() {
        super();
        this.state = { currentPosition: 3 }
    }
    onPageChange(position) {
        this.setState({ currentPosition: position });
    }

    render(){
        return(
            <Container style={{backgroundColor:'white'}} >
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
                <Content style={{top:20,left:7,right:7}}>
                

                      <StepIndicator
                    customStyles={customStyles}
                    currentPosition={this.state.currentPosition}
                    labels={labels}
                    stepCount={4}
                    />
                    <Card transparent style={{ backgroundColor:'#F1F9FF',height:145,width:300}}>
                        <CardItem style={{backgroundColor:'#F1F9FF'}}>
                            <Text style={{color:'#BCE0FD'}}>Personal Info</Text>
                            <Right style={{left:15}}>
                                <Icon style={{color:'#BCE0FD'}} name="create"  onPress={() => alert("This is Card Header")}/>
                            </Right>

                                       
                        </CardItem>
                        <CardItem style={{backgroundColor:'#F1F9FF'}}>
                            <Left>
                                <Icon  name='person' style={{color:'#167ED8'}}></Icon>
                                <Body>
                                    <Text style={styles.text}>Mahmoud Ashraf</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        
                         <CardItem style={{backgroundColor:'#F1F9FF'}}>
                            <Left>
                                <Icon  name='mail' style={{color:'#167ED8'}}></Icon>
                                <Body>
                                    <Text style={styles.text}>Mahmoud Ashraf</Text>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card>


                    <Card  transparent style={{ width:300 }}>
                        <CardItem style={{backgroundColor:'#F1F9FF'}}>
                            <Text style={{color:'#BCE0FD'}}>Plan</Text>
                            <Right style={{left:27}}>
                                <Icon style={{color:'#BCE0FD'}}  name="create"  onPress={() => alert("This is Card Header")}/>
                            </Right>
                        </CardItem>

                        <CardItem style={{backgroundColor:'#F1F9FF'}}>
                            <Left>
                                     <Thumbnail square source={require('../../images/Cards/visa.png')} />
                                    <Body>
                                        <Text style={styles.text}>Unlimited kids plan</Text>
                                    </Body>
                            </Left>
                        </CardItem>
                    </Card>

                    <Card transparent style={{ height:160,width:300 }}>
                        <CardItem style={{backgroundColor:'#F1F9FF'}}>
                            <Text  style={{color:'#BCE0FD'}} >Payment Method</Text>
                            <Right style={{left:15}}>
                                <Icon style={{color:'#BCE0FD'}} name="create"  onPress={() => alert("This is Card Header")}/>
                            </Right>
                        </CardItem>

                        <CardItem style={{backgroundColor:'#F1F9FF'}}>
                            <Body>
                               <Image style={{color:'#BCE0FD'}} source={require('../../images/Cards/visa.png')} style={{height:50,width:100}}></Image>
                            </Body>
                        </CardItem>


                         <CardItem style={{backgroundColor:'#F1F9FF'}}>
                                <Body>
                                     <Text style={styles.text}>XXXX-XXXX-XXXX-1908</Text>
                                </Body>
                        </CardItem>
                    </Card>

                       
                       
                </Content>
                <Button style={{  alignItems:'stretch',alignContent:'stretch',alignSelf:'stretch',justifyContent:'center',top:5, backgroundColor:'#167ED8'}}>
                            <Text style={{top:5}} >Pay Secure</Text>
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