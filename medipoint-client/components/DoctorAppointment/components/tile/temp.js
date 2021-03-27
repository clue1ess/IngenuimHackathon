import React from 'react';
import { StyleSheet,Text, SectionList,Image, View, ScrollView, TouchableOpacity, Platform } from 'react-native';
import {
  Card,
  ListItem,
  Button,
  Icon,
  Divider,
} from "react-native-elements";
import { ScreenStackHeaderRightView } from 'react-native-screens';

const doctors= [
  {
      id: '1',
      name:"Dr. Apurva Tiwari",
      hospital:"Sanjeevani Hospital",
      speciality:"M.B.B.S.",
      contact:"+918888888888",
      img : require('../DoctorDetails/img/dr_apurva.png'),
  },
  {
    id: '2',
    name:"Dr. David Schimmer",
      hospital:"Wockhardt Hospital",
      speciality:"M.B.B.S., M.D.",
      contact:"+918888888889",
      img : require('../DoctorDetails/img/dr_david.png'),
  },
  {
    id: '3',
    name:"Dr. Aniruddha Bhosale",
      hospital:"Navjeevan Hospital",
      speciality:"M.B.B.S., M.D., D.M.",
      contact:"+918888888811",
      img : require('../DoctorDetails/img/dr_aniruddha.png'),
  },
  {
    id: '4',
    name:"Dr. Riddhima Khurana",
      hospital:"Chanakya Hospital",
      speciality:"M.B.B.S.",
      contact:"+918888888882",
      img : require('../DoctorDetails/img/dr_riddhima.png'),
  },
  {
    id: '5',
    name:"Dr. Maya ",
      hospital:"Aaayu Hospital",
      speciality:"M.B.B.S.",
      contact:"+918888888883",
      img : require('../DoctorDetails/img/dr_Maya.png'),
  },
  {
    id: '6',
    name:"Dr. Benedict Cumberbatch",
      hospital:"Sanjeevani Hospital",
      speciality:"M.B.B.S.",
      contact:"+918888888884",
      img : require('../DoctorDetails/img/dr_david.png'),
  },
  
];

const temp = () => {
  return(
    <ScrollView>
      {
        doctors.map((d, i) => 
        <ListItem key={i}>
          <TouchableOpacity>
          <View>
              <Card title={d.name} image={d.img}>
                <View style={{ marginVertical: 15 }}>
                  <Text>{d.speciality}</Text>

                  <Text>{d.hospital}</Text>
                </View>
                <Divider style={{ backgroundColor: "blue" }} />
                <Text style={{ marginVertical: 30 }}>{d.contact}</Text>
              </Card>
            </View>
          </TouchableOpacity>
        </ListItem>)
}
      </ScrollView>
  )
}

export default temp;
