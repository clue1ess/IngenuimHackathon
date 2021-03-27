import React, { Component } from 'react'; 
import { StyleSheet, Text, View, Image } from 'react-native';
import HomeStack from './HomeStack';
import Login from './Login';

export default class WelcomeScreen extends Component
{  
   constructor(){  
     super();  
     this.state={  
     isVisible : true,  
    }  
  }  
   Hide_Splash_Screen=()=>{  
    this.setState({   
      isVisible : false   
    });  
  }  
   
  componentDidMount=()=>{  
    //var that = this;  
    setTimeout(()=>{  
      this.Hide_Splash_Screen();  
    }, 3000);  
   }  
   
    render()  
    {  
      let Splash_Screen = (  
        <View style={styles.SplashScreen_RootView}>  
          <View style={styles.SplashScreen_ChildView}>  
            <Image 
              source={require('../assets/logo.png')}  
              style={{width:'70%', height: '70%', resizeMode: 'contain'}} 
            />  
          </View>  
        </View> )  
      return(  
        <View style = { styles.MainContainer }>  
          <HomeStack/>  
            {  
              (this.state.isVisible === true) ? Splash_Screen : null  
            }  
        </View>  
      );  
    }  
}  
 const styles = StyleSheet.create(  
{  
    MainContainer:  
    {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center'
    },  
   
    SplashScreen_RootView:  
    {  
        justifyContent: 'center',  
        flex:1,  
        margin: 10,  
        position: 'absolute',  
        width: '100%',  
        height: '100%',  
    },  
   
    SplashScreen_ChildView:  
    {  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: '#fff',  
        flex:1,  
    },  
}); 