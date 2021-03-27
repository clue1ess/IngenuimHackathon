import React from 'react';
import { StyleSheet, Text, SectionList, View, ScrollView, TouchableOpacity, Platform } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../components/header'
import { ListItem, SearchBar, Card } from 'react-native-elements';


let list = ['Abdominal Aortic', 'ACE', 'Asthma', 'Babecia', 'Bacterial Infection', 'Birth Defects', 
    'Black Lung', 'Bird Flu', 'Covid', 'Cancer', 'Cold', 'Cough', 'Cholera'];

export default class MediPedia extends React.Component{
    constructor(props){
        super(props);  
        this.state = {
            search: '',
            diseases: list,
            filteredDiseases: list
        };
    }    
    
    updateSearch(text){
        this.setState({
            search: text,
            filteredDiseases: this.state.diseases.filter(i=>i.toUpperCase().includes(text.toUpperCase()))
        });
    };
    render() {
        const { search } = this.state;
    
    return (
        <View style={styles.container}>
            <View style={{zIndex: 9}}>
                <Header heading="MediPedia"/>
            </View>
            <View style={styles.searchStyle}>
                    <SearchBar
                        inputStyle={{backgroundColor: 'white'}}
                        containerStyle={{backgroundColor: '#fff', width: '100%', paddingLeft: 20, paddingRight:20}}
                        lightTheme
                        placeholder="Search..."
                        onChangeText={text=> this.updateSearch(text)}         
                        value={search}
                        platform={Platform.OS}
                    />
            </View>                
            <View style={styles.scrollContainer}>
                {
                    this.state.filteredDiseases.map((l, i)=>(
                        
                        <ListItem key={i} bottomDivider>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('DiseasesInfo', {disease: l})}  >
                                <View style={{width: '100%'}}>
                                    <ListItem.Content>
                                            <ListItem.Title>{l}</ListItem.Title>                                       
                                    </ListItem.Content>
                                </View>
                            </TouchableOpacity>         
                        </ListItem>
                    ))}
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
    },
    scrollContainer:{
        top: 60
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    listContainer: {
        paddingTop: 20
    },
    searchStyle: {
        position: 'fixed', 
        zIndex: 9, 
        top: 90,
        height: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
