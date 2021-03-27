import React from 'react';
import { StyleSheet, Text, SectionList, View, ScrollView, TouchableOpacity } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../components/header'
import { Button, CheckBox } from 'react-native-elements'

let diseaseslist = ['Body Pain', 'Cold', 'Cough', 'Difficulty in breathing', 'Fever', 'Loss of apetite', 'Weakness'];
let list = []
diseaseslist.map((item)=>
    list.push({name: item,
    isChecked: false})
)

export default class MediPredict extends React.Component{
    
    state = {
        checked: false,
        checkedList: list
    };     
    updateChecked(item,index){
        let items = [...this.state.checkedList];
        items[index].isChecked = !items[index].isChecked;
        this.setState({
            checkedList: items
        });
    }
    predictDisease=()=>{
        let disease = 'Disease'
        let symptoms = []
        this.state.checkedList.map((item)=>{
            if(item.isChecked === true){
                symptoms.push(item.name)
            }
        }
        )
        console.log(symptoms)
        alert(disease)
        this.clearCheckbox()
    };
    clearCheckbox=()=>{
        let items = [...this.state.checkedList];
        items.map((item)=>{
            item.isChecked = false
        })
        this.setState({
            checkedList: items
        });
    }
    renderCheckbox() {
        return this.state.checkedList.map((item,index) => {
            return (
                <CheckBox
                    title={item.name}
                    checked={item.isChecked}
                    onPress={item=> this.updateChecked(item,index)}
                />
            );
        });
    }
    render() {
        
        return (
            <View style={styles.container}>
                <View style={{zIndex: 9}}>
                    <Header heading="MediPredict"/>
                </View>
                <View style={{flexDirection: 'column'}}>
                    <View style={{top: 60}}>
                        <View style={{left: '5%'}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                                Symptoms
                            </Text>
                        </View>
                        <View style={{top: 10}}>
                            {
                                this.renderCheckbox()
                            }
                        </View>                                        
                    </View>
                    <View style={{flexDirection: 'row'}}>                
                        <View style={{top: 100, width:100, flex: 1}}/>
                        <View style={{top: 100, width:100, flex: 2}}>
                            <Button
                                title="Predict"
                                buttonStyle={{backgroundColor: 'green'}}
                                onPress={this.predictDisease}
                            />
                        </View>                
                        <View style={{top: 100, width:100, flex: 1}}/>
                        <View style={{top: 100, width:100, flex: 2}}>
                            <Button
                                title="Clear"
                                buttonStyle={{backgroundColor: 'orange'}}
                                onPress={this.clearCheckbox}
                            />
                        </View>                
                        <View style={{top: 100, width:100, flex: 1}}/>
                    </View>
                </View>                                  
    
            </View>        
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