import 'react-native-gesture-handler';

import React, { Component } from 'react';
import {Platform,StyleSheet,Image, FlatList, ScrollView, View, TouchableOpacity, useEffect } from 'react-native';
import{Container, Header, Body, Checkbox, Title, Card,CardItem,Left, Right, Icon, Content, Text, Subtitle, Thumbnail} from 'native-base'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
export default class DoctorList extends React.Component {

    render(){
        return(
        //<TouchableOpacity onPress={this.props.onPress}>
  

        <Card>

          <CardItem 
          button style={{alignItems:'center'}} >          
              <Left>
                  <Thumbnail
                  source={this.props.img}
                  style={{width:60,height:80,borderRadius:10, marginRight:5}}></Thumbnail>
                  <View style={{alignItems:'flex-start'}}>
                    <Title style={{fontStyle:'normal', color:'black', marginLeft:10, textAlign:'center',marginBottom:3}}>{this.props.name}</Title>
                    <Subtitle style={{fontStyle:'italic', color:'grey', marginLeft:10, marginBottom:3}}>{this.props.speciality}</Subtitle>
                    <Subtitle style={{fontStyle:'italic', color:'grey', marginLeft:10, marginBottom:3}}>{this.props.hospital}</Subtitle>

                    <Subtitle style={{fontStyle:'italic', color:'grey', marginLeft:10,  marginBottom:3}}>Contact: {this.props.contact}</Subtitle>
                    
                  </View>
              
                  </Left>

          
          </CardItem>
        </Card>
       // </TouchableOpacity>

        )
    }
}



