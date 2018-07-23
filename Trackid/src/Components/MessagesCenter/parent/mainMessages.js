import StepIndicator from 'react-native-step-indicator';
import React,{ Component } from "react";
import { View,StyleSheet,Image,TextInput,ScrollView} from "react-native";
import {Header,Content, Left, Body,Label,DatePicker,CheckBox, Footer,FooterTab,Right, Title, Text,Icon, Button ,Item,Input, Card, CardItem, Container, Thumbnail} from "native-base";
// import Icon from 'react-native-vector-icons';
import { RecentMessages } from './recentMessages';
import { Kids } from './kids';
export class MainMessages extends Component{
    activeTab=null;
    colors=[false,false,false];
    appComponent;
    state={component:null,title:null};

  
    componentWillMount(){
        this.switchScreen();
      }
      switchScreen(screen='Kids'){
        let appComponent=null;
        let active;
        switch(screen){
          
          case 'RecentMessages':  
          this.appComponent=<RecentMessages switchScreen={this.switchScreen.bind(this)}/>;
          this.colors=[true,false,false];
          this.setState({title:'Recent'});
          active='RecentMessages';
          break;
          case 'Kids':  
          this.appComponent=<Kids switchScreen={this.switchScreen.bind(this)}/>;
          this.colors=[false,true,false];
          this.setState({title:'Kids'});
          active='Kids';
          break;
        //   case 'Search':  
        //   this.appComponent=<Search switchScreen={this.switchScreen.bind(this)}/>;
        //   this.colors=[false,false,true,false];
        //   this.setState({title:'SEARCH'});
        //   active='Search';
        //   break;

        //   case 'Profile':  
        //   this.appComponent=<Profile switchScreen={this.switchScreen.bind(this)}/>;
        //   this.colors=[false,false,false,true];
        //   this.setState({title:'PROFILE'});
        //   active='Profile';
        //   break;
        }
        this.activeTab=active;
        
        this.setState({component:this.appComponent});
      } 
    render(){
        return(
            <Container style={{backgroundColor:'white'}}>
                <Header transparent>
                    <Left>
                        <Button transparent >
                            <Icon style={{width:16,height:21.5 ,color:"#2699FB",top:-3}} name="arrow-back"></Icon>
                    
                        </Button>
                    </Left>
                    <Body style={{alignSelf:'center'}}>
                        <Title style={[styles.IconColor, styles.Title]}>{this.state.title}</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                        <Image style={{tintColor:'#2699FB',width:24.45,height:15.34}} source={require('../../../images/Icons/drawable-hdpi/Rectangle1459.png')}></Image>
                         </Button>
                    </Right>
                </Header>
                
<Content>
    {this.state.component}
</Content>
<Footer>
          <FooterTab style={styles.backgroundBar}>
            <Button active={this.activeTab==='RecentMessages'}
             style={styles.backgroundBar}  onPress={()=>this.switchScreen('RecentMessages')}>
             <Icon style={{color:this.colors[0]?'white':'',width:22,height:22}} name="time"/>
            </Button>

            <Button active={this.activeTab==='Kids'}
            style={styles.backgroundBar}
             onPress={()=>this.switchScreen('Kids')}>
              <Icon  name="notifications" style={{color:this.colors[1]?'white':'#F1F9FF',width:22,height:22}}/>
            </Button> 


            {/* <Button active={this.activeTab==='Search'}
            style={styles.backgroundBar}
             onPress={()=>this.switchScreen('Search')}>
              <Icon  name="search" style={{color:this.colors[2]?'white':'#F1F9FF',width:22,height:22}}/>
            </Button>  */}
          </FooterTab>
        </Footer>
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
        alignSelf: 'center',left:40
       
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
      backgroundBar:{
        backgroundColor:'#167ED8',
      },
    //  headerColor:{
    //   backgroundColor:'#F1E4F0',
    //   height:120
    //  }
}
)

