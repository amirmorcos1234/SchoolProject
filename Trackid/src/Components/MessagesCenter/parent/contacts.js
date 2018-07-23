import StepIndicator from 'react-native-step-indicator';
import React,{ Component } from "react";
import { View,StyleSheet,Image,TextInput,ScrollView} from "react-native";
import {Header,Content, Left, Body,Label,DatePicker,CheckBox, Footer,FooterTab,Right,Icon, Title, Text, Button ,Item,Input, Card, CardItem, Container, Thumbnail} from "native-base";
// import { NewsFeed } from './NewsFeed';
// import { Notifications } from './Notifications';
// import { Search } from './search';
// import { Profile } from './profile';
export class Contacts extends Component{
    activeTab=null;
    colors=[false,false,false,false];
    appComponent;
    state={component:null,title:null};

  
    componentWillMount(){
        this.switchScreen();
      }
      switchScreen(screen='NewsFeed'){
        let appComponent=null;
        let active;
        switch(screen){
          
          case 'NewsFeed':  
          this.appComponent=<NewsFeed switchScreen={this.switchScreen.bind(this)}/>;
          this.colors=[true,false,false,false];
          this.setState({title:'NEWS FEED'});
          active='NewsFeed';
          break;
          case 'Notifications':  
          this.appComponent=<Notifications switchScreen={this.switchScreen.bind(this)}/>;
          this.colors=[false,true,false,false];
          this.setState({title:'NOTIFICATIONS'});
          active='Notifications';
          break;
          case 'Search':  
          this.appComponent=<Search switchScreen={this.switchScreen.bind(this)}/>;
          this.colors=[false,false,true,false];
          this.setState({title:'SEARCH'});
          active='Search';
          break;

          case 'Profile':  
          this.appComponent=<Profile switchScreen={this.switchScreen.bind(this)}/>;
          this.colors=[false,false,false,true];
          this.setState({title:'PROFILE'});
          active='Profile';
          break;
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
                            <Image style={{tintColor:'#2699FB',width:24.45,height:15.34}} source={require('../../../images/Icons/drawable-hdpi/Rectangle1459.png')}></Image>
                        </Button>
                    </Left>
                    <Body style={{alignSelf:'center'}}>
                        <Title style={[styles.IconColor, styles.Title]}>{this.state.title}</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                        <Image source={require('../../../images/Icons/drawable-hdpi/Chat.png')} style={{width:16,height:16}}></Image>
                        </Button>
                    </Right>
                </Header>
                
<Content>
    {this.state.component}
</Content>
<Footer>
          <FooterTab style={styles.backgroundBar}>
            <Button active={this.activeTab==='NewsFeed'}
             style={styles.backgroundBar}  onPress={()=>this.switchScreen('NewsFeed')}>
             <Icon style={{color:this.colors[0]?'white':'',width:22,height:22}} name="list-box"/>
            </Button>

             <Button active={this.activeTab==='Notifications'}
            style={styles.backgroundBar}
             onPress={()=>this.switchScreen('Notifications')}>
              <Icon  name="notifications" style={{color:this.colors[1]?'white':'#F1F9FF',width:22,height:22}}/>
            </Button>


            <Button active={this.activeTab==='Search'}
            style={styles.backgroundBar}
             onPress={()=>this.switchScreen('Search')}>
              <Icon  name="search" style={{color:this.colors[2]?'white':'#F1F9FF',width:22,height:22}}/>
            </Button>
          
            <Button active={this.activeTab==='Profile'}
            style={styles.backgroundBar}
             onPress={()=>this.switchScreen('Profile')}>
              <Icon  name="person" style={{color:this.colors[3]?'white':'#F1F9FF',width:22,height:22}}/>
            </Button>

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

