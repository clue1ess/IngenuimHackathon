import React, { Component, useState }from 'react';

import {Alert,Platform,Pressable,Modal,StyleSheet,  Dimensions,Center, Image, 
  FlatList, ScrollView, View, TouchableOpacity, Text, useEffect } from 'react-native';

import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { data } from '../../model/data';
import { TouchableHighlight } from 'react-native-gesture-handler';

const doctors= [
  {
      id: '1',
      name:"Dr. Apurva Tiwari",
      hospital:"Sanjeevani Hospital",
      speciality:"M.B.B.S.",
      contact:"8888888888",
      img : require('../DoctorDetails/img/dr_apurva.png'),
      des : "Qualification: MBBS (Mum.) M.S. (Gen. Surg) (mum.) MCh (CVTS) (Mum) Department: Cardiothoracic & Vascular Surgeon Speciality: Cardio Thoracic & Vascular Surgery"
  },
  
];
const time=[ '10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00','01:30-02:00', '02:00-02:30',
'02:30-03:00', '03:00-03:30', '03:30-04:00', '04:00-04:30', '04:30-05:00',
]

const TimeSlotBooking = () => {


  const [modalVisible, setModalVisible] = useState(false);

   
        
        return(
            <ScrollView style={styles.container}>
            {
            doctors.map((d, i) => 
           

            <View key={i} style={styles.section}>
            
            <Text>  
              <Image
                  source={d.img}
                  style={{width:60,height:80,borderRadius:10, margin:10}}>
              </Image>
              
             <Text style={{fontWeight:'bold', fontSize:20, alignSelf:'center'}}>{'\t'}{d.name}{'\n'}{'\n'}
             </Text> 
              {'\n'}
              <Text style={{flex: 1}}>{d.des} {'\n'} </Text> 
             
              </Text>

            </View>)
}

{
            time.map((t, j) => 

            <View key={j}  style={styles.section}>
              <View style={styles.categories}>
                <TouchableHighlight>
                <View style={styles.categoryContainer}>
                <Text style={styles.category}>{t}</Text>
                </View>
                </TouchableHighlight>
                
              </View>
            </View>)
}
            <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Confirm your Slot</Text>
            <TouchableOpacity>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Confirm</Text>
            </Pressable></TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Book the slot</Text>
      </Pressable></TouchableOpacity>
    </View>
          
          </ScrollView>

        
        )
    }




const styles = StyleSheet.create({
  bookButton: {
    alignSelf:'center', 
    margin: 10, 
    backgroundColor:'brown',
  },
  container: {
    flex: 1,
  },

  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    marginLeft:10,
    borderBottomWidth: 1,
    marginRight:10,
    
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  categoryContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
  bookedcategoryContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: 'grey',
    borderRadius: 20,
    margin: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
  category: {
    fontSize: 14,
    color: 'black',
    alignItems: 'center',
  },
  selectedcategory: {
    fontSize: 14,
    color: 'white',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    minHeight: 300,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "brown",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },

});
export default TimeSlotBooking;
