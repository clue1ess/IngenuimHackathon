import React from 'react';
import { StyleSheet, Text, SectionList, View, ScrollView, TouchableOpacity } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
// import Header from '../Header/header'
import { Button, CheckBox } from 'react-native-elements';
import { withNavigationFocus } from 'react-navigation';
import Loading from '../../screens/Loading';



class MediPredict extends React.Component {

    state = {
        checked: false,
        checkedList: []
    };

    componentDidMount() {
        const token = "Bearer " + localStorage.getItem('token');

        fetch('http://localhost:3000/symptoms', {
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
                let list = []
                response.map((item) =>
                    list.push({
                        name: item.name,
                        isChecked: false
                    })
                )
                this.setState({ checkedList: list })
            })
    }
    updateChecked(item, index) {
        let items = [...this.state.checkedList];
        items[index].isChecked = !items[index].isChecked;
        this.setState({
            checkedList: items
        });
    }
    predictDisease = () => {
        let list = []
        for (var i = 0; i < this.state.checkedList.length; i++) {
            if (this.state.checkedList[i].isChecked)
                list.push(this.state.checkedList[i].name)
        }


        const token = "Bearer " + localStorage.getItem('token');

        fetch('http://localhost:3000/predict', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": token
            },
            credentials: "same-origin",
            body: JSON.stringify({ "symptoms": list })
        })
            .then(response => {
                alert(response);
                this.clearCheckbox();
            })


    };
    clearCheckbox = () => {
        let items = [...this.state.checkedList];
        items.map((item) => {
            item.isChecked = false
        })
        this.setState({
            checkedList: items
        });
    }
    renderCheckbox() {
        return this.state.checkedList.map((item, index) => {
            return (
                <CheckBox
                    title={item.name}
                    checked={item.isChecked}
                    onPress={item => this.updateChecked(item, index)}
                />
            );
        });
    }
    render() {

        return (
            !this.props.isFocused ? null : (
                this.state.checkedList ?
                    <ScrollView style={styles.container}>
                        {/* <View style={{ zIndex: 9 }}>
                    <Header heading="MediPredict" />
                </View> */}
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ top: 60 }}>
                                <View style={{ left: '5%' }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                        Symptoms
                            </Text>
                                </View>
                                <View style={{ top: 10 }}>
                                    {
                                        this.renderCheckbox()
                                    }
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ top: 100, width: 100, flex: 1 }} />
                                <View style={{ top: 100, width: 100, flex: 2 }}>
                                    <Button
                                        title="Predict"
                                        buttonStyle={{ backgroundColor: 'green' }}
                                        onPress={this.predictDisease}
                                    />
                                </View>
                                <View style={{ top: 100, width: 100, flex: 1 }} />
                                <View style={{ top: 100, width: 100, flex: 2 }}>
                                    <Button
                                        title="Clear"
                                        buttonStyle={{ backgroundColor: 'orange' }}
                                        onPress={this.clearCheckbox}
                                    />
                                </View>
                                <View style={{ top: 100, width: 100, flex: 1 }} />
                            </View>
                        </View>

                    </ScrollView>
                    :
                    <View><Loading /></View>
            )
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center'
    }
})

export default withNavigationFocus(MediPredict);