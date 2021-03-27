import React from 'react';
import { StyleSheet,Text, SectionList,Image, View, ScrollView, TouchableOpacity, Platform , Dimensions} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { ScreenStackHeaderRightView } from 'react-native-screens';
var deviceWidth = Dimensions.get('window').width;


const doctors= [
  {
      id: '1',
      name:"Dr. Apurva Tiwari",
      hospital:"Sanjeevani Hospital",
      speciality:"M.B.B.S.",
      contact:"8888888888",
      img : require('./img/dr_apurva.png'),
  },
  {
    id: '2',
    name:"Dr. David Schimmer",
      hospital:"Wockhardt Hospital",
      speciality:"M.B.B.S., M.D.",
      contact:"8888888889",
      img : require('./img/dr_david.png'),
  },
  {
    id: '3',
    name:"Dr. Aniruddha Bhosale",
      hospital:"Navjeevan Hospital",
      speciality:"M.B.B.S., M.D., D.M.",
      contact:"8888888811",
      img : require('./img/dr_aniruddha.png'),
  },
  {
    id: '4',
    name:"Dr. Riddhima Khurana",
      hospital:"Chanakya Hospital",
      speciality:"M.B.B.S.",
      contact:"8888888882",
      img : require('./img/dr_riddhima.png'),
  },
  {
    id: '5',
    name:"Dr. Maya ",
      hospital:"Aaayu Hospital",
      speciality:"M.B.B.S.",
      contact:"8888888883",
      img : require('./img/dr_Maya.png'),
  },
  {
    id: '6',
    name:"Dr. Benedict Cumberbatch",
      hospital:"Sanjeevani Hospital",
      speciality:"M.B.B.S.",
      contact:"8888888884",
      img : require('./img/dr_david.png'),
  },
  
];

const DoctorDetails = () => {
  return(
    <ScrollView>
      {
        doctors.map((d, i) => 
        <ListItem key={i} style={{alignItems:'center'}}>
          <TouchableOpacity >
          <Card containerStyle={{padding: 5, borderColor:'#c2c2d6', borderRadius:10, width: deviceWidth/(1.2), margin:10}} >
            <Card.Title>{d.name}</Card.Title>
            <Card.Divider />
            <View>
            <Card.Image  style={{marginLeft:-150}}  resizeMode="contain" source={d.img } >
              <View style={{marginLeft:310, marginTop:7}}>
              <Text style={{fontSize:13}}>{d.hospital}{'\n'}</Text>
              <Text style={{fontSize:13}}>{d.speciality}{'\n'}</Text>
              <Text style={{fontSize:13}}>Mob: {d.contact}</Text>

              </View>
              
            </Card.Image>
            </View>
            

            
           
            

          </Card>
          </TouchableOpacity>
  
          
        </ListItem>)
      }
    </ScrollView>
  )
}

export default DoctorDetails;
