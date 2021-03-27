import React, { Component } from 'react';
import { StyleSheet, Text, SectionList, Image, View, ScrollView, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { ScreenStackHeaderRightView } from 'react-native-screens';
var deviceWidth = Dimensions.get('window').width;
var img = [require('./img/dr_apurva.png'),
require('./img/dr_david.png'),
require('./img/dr_aniruddha.png'),
require('./img/dr_riddhima.png'),
require('./img/dr_Maya.png'),
require('./img/dr_david.png')]
import { withNavigationFocus } from 'react-navigation';
import Loading from '../../screens/Loading';

// const doctors= [
//   {
//       id: '1',
//       name:"Dr. Apurva Tiwari",
//       hospital:"Sanjeevani Hospital",
//       speciality:"M.B.B.S.",
//       contact:"8888888888",
//       img : require('./img/dr_apurva.png'),
//   },
//   {
//     id: '2',
//     name:"Dr. David Schimmer",
//       hospital:"Wockhardt Hospital",
//       speciality:"M.B.B.S., M.D.",
//       contact:"8888888889",
//       img : require('./img/dr_david.png'),
//   },
//   {
//     id: '3',
//     name:"Dr. Aniruddha Bhosale",
//       hospital:"Navjeevan Hospital",
//       speciality:"M.B.B.S., M.D., D.M.",
//       contact:"8888888811",
//       img : require('./img/dr_aniruddha.png'),
//   },
//   {
//     id: '4',
//     name:"Dr. Riddhima Khurana",
//       hospital:"Chanakya Hospital",
//       speciality:"M.B.B.S.",
//       contact:"8888888882",
//       img : require('./img/dr_riddhima.png'),
//   },
//   {
//     id: '5',
//     name:"Dr. Maya ",
//       hospital:"Aaayu Hospital",
//       speciality:"M.B.B.S.",
//       contact:"8888888883",
//       img : require('./img/dr_Maya.png'),
//   },
//   {
//     id: '6',
//     name:"Dr. Benedict Cumberbatch",
//       hospital:"Sanjeevani Hospital",
//       speciality:"M.B.B.S.",
//       contact:"8888888884",
//       img : require('./img/dr_david.png'),
//   },

// ];

class DoctorDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: []
    };
  }
  static navigationOptions = {
    title: 'MediAppointHome'
  };
  componentDidMount() {
    const token = "Bearer " + localStorage.getItem('token');

    fetch('http://localhost:3000/doctors', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": token
      },
      credentials: "same-origin"
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({ doctors: response })

      })
  }
  render() {
    return (
      !this.props.isFocused ? null : (
        this.state.doctors ?
          <ScrollView>
            {
              this.state.doctors.map((d, i) =>
                <ListItem key={i} style={{ alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('TimeSlotBooking', { doctor: this.state.doctors[i] })} >
                    <Card containerStyle={{ padding: 5, borderColor: '#c2c2d6', borderRadius: 10, width: deviceWidth / (1.2), margin: 10 }} >
                      <Card.Title>{"Dr. " + d.firstname + " " + d.lastname}</Card.Title>
                      <Card.Divider />
                      <View>
                        <Card.Image style={{ marginLeft: -150 }} resizeMode="contain" source={img[i]} >
                          <View style={{ marginLeft: 310, marginTop: 7 }}>
                            <Text style={{ fontSize: 13 }}>{d.hospital}{'\n'}</Text>
                            <Text style={{ fontSize: 13 }}>{d.designation}{'\n'}</Text>
                            <Text style={{ fontSize: 13 }}>Mob: {d.contact_num}</Text>

                          </View>

                        </Card.Image>
                      </View>


                    </Card>
                  </TouchableOpacity>


                </ListItem>)
            }
          </ScrollView>
          :
          <View><Loading /></View>
      )
    )
  }
}

export default withNavigationFocus(DoctorDetails);