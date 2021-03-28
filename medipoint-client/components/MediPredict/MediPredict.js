import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import { withNavigationFocus } from 'react-navigation';
import Loading from '../../screens/Loading';
import { baseUrl } from '../../config';



class MediPredict extends React.Component {

    state = {
        checked: false,
        checkedList: []
    };

    static navigationOptions = {
        title: 'MediPredict'
    };

    componentDidMount() {
        const token = "Bearer " + localStorage.getItem('token');

        fetch(baseUrl + 'symptoms', {
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

        fetch(baseUrl + 'predict', {
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
                    backgroundColor="white"
                />
            );
        });
    }
    render() {

        return (
            !this.props.isFocused ? null : (
                this.state.checkedList.length ?
                    <ScrollView style={styles.container}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ top: 20 }}>
                                <View style={{ left: '5%' }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                        Symptoms
                            </Text>
                                </View>
                                <View style={{ top: 10, backgroundColor: "white" }}>
                                    {
                                        this.renderCheckbox()
                                    }
                                </View>
                            </View>

                        </View>
                        <View style={{ margin: 20 }}></View>
                        <Button
                            title="Predict"
                            buttonStyle={{ backgroundColor: '#3cb371', width: "70%", alignSelf: "center" }}
                            onPress={this.predictDisease}
                        />
                        <View style={{ margin: 5 }}></View>
                        <Button
                            title="Clear"
                            buttonStyle={{ backgroundColor: '#fe6f5e', width: "70%", alignSelf: "center" }}
                            onPress={this.clearCheckbox}
                        />
                        <View style={{ margin: 5 }}></View>
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
        backgroundColor: 'white',
        alignContent: 'center'
    },
    buttonStyle: {
        borderRadius: 10,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: "#e7feff"
    }
})

export default withNavigationFocus(MediPredict);
