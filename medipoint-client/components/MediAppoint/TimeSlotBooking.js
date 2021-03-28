import React, { Component } from 'react';
import { Pressable, Modal, StyleSheet, Image, ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { withNavigationFocus } from 'react-navigation';

const time = ['10:00-10:30', '10:30-11:00', '11:00-11:30', '11:30-12:00'
  , '01:30-02:00', '02:00-02:30',
  '02:30-03:00', '03:00-03:30', '03:30-04:00', '04:00-04:30', '04:30-05:00',
]
const img = require('./img/dr_david.png');

class TimeSlotBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      selectedTime: ""
    }

  }
  static navigationOptions = {
    title: 'TimeSlotBooking'
  };
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  goback() {
    this.setModalVisible(!this.state.modalVisible);
    this.props.navigation.navigate('MediAppoint')
  }

  render() {
    const doctor = this.props.navigation.getParam('doctor', "");
    return (
      !this.props.isFocused ? null : (
        doctor ?
          <ScrollView style={styles.container} >
            <View key={5000} style={styles.section}>
              <Text>
                <Image
                  source={doctor.img}
                  style={{ width: 60, height: 80, borderRadius: 10, margin: 10 }}>
                </Image>
                <Text style={{ fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>{'\t'}{"Dr. " + doctor.firstname + " " + doctor.lastname}{'\n'}{'\n'}
                </Text>
                {'\n'}
                <Text style={{ flex: 1 }}>{"Designation : " + doctor.designation} {'\n'}
                  {"Hospital : " + doctor.hospital} {'\n'}
                  {"Contact Num : " + doctor.contact_num} {'\n'}
                </Text>
              </Text>
            </View>

            {
              time.map((t, j) =>

                <View key={j} style={styles.section}>
                  <View style={styles.categories}>
                    <TouchableHighlight onPress={() => this.setState({ selectedTime: t[j] })}>
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
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>Selected Slot is 11:00-11:30</Text>
                    <TouchableOpacity>
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => this.goback()}
                      >
                        <Text style={styles.textStyle}>Confirm</Text>
                      </Pressable></TouchableOpacity>
                  </View>
                </View>
              </Modal>
              <TouchableOpacity>
                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={() => this.setModalVisible(!this.state.modalVisible)}
                >
                  <Text style={styles.textStyle}>Book the slot</Text>
                </Pressable></TouchableOpacity>
            </View>

          </ScrollView >
          : <View></View>
      )

    )
  }
}




const styles = StyleSheet.create({
  bookButton: {
    alignSelf: 'center',
    margin: 10,
    backgroundColor: 'brown',
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
    marginLeft: 10,
    borderBottomWidth: 1,
    marginRight: 10,

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
export default withNavigationFocus(TimeSlotBooking);

