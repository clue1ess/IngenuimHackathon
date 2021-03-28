import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Card, ListItem } from 'react-native-elements'
var deviceWidth = Dimensions.get('window').width;
var img = [require('./img/dr_apurva.png'),
require('./img/dr_david.png'),
require('./img/dr_aniruddha.png'),
require('./img/dr_riddhima.png'),
require('./img/dr_Maya.png'),
require('./img/dr_david.png')]
import { withNavigationFocus } from 'react-navigation';
import Loading from '../../screens/Loading';
import { baseUrl } from '../../config';


class DoctorDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: []
    };
  }
  static navigationOptions = {
    title: 'MediAppoint'
  };
  componentDidMount() {
    const token = "Bearer " + localStorage.getItem('token');

    fetch(baseUrl + 'doctors', {
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
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('TimeSlotBooking', { doctor: d })} >
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