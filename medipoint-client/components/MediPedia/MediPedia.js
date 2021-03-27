import React from 'react';
import { StyleSheet, Text, SectionList, View, ScrollView, TouchableOpacity, Platform } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
// import Header from '../components/header'
import { ListItem, SearchBar, Card } from 'react-native-elements';
// import { useNavigation } from '@react-navigation/native';
import { baseUrl } from '../../config';
import { withNavigationFocus } from 'react-navigation';
import Loading from '../../screens/Loading';





// let list = ['Abdominal Aortic', 'ACE', 'Asthma', 'Babecia', 'Bacterial Infection', 'Birth Defects',
//     'Black Lung', 'Bird Flu', 'Covid', 'Cancer', 'Cold', 'Cough', 'Cholera'];

// const navigation = useNavigation();

class MediPedia extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            diseases: [],
            filteredDiseases: []
        };
    }

    static navigationOptions = {
        title: 'MediPedia'
    };

    updateSearch(text) {
        this.setState({
            search: text,
            filteredDiseases: this.state.diseases.filter(i => i.name.toUpperCase().includes(text.toUpperCase()))
        });
    };

    componentDidMount() {
        const token = "Bearer " + localStorage.getItem('token');

        fetch(baseUrl + 'diseases', {
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
                this.setState({ disease: response })
                this.setState({ filteredDiseases: response })
            })
    }

    render() {
        const { search } = this.state;

        return (
            !this.props.isFocused ? null : (
                this.state.filteredDiseases
                    ?
                    <ScrollView style={styles.container}>
                        {/* <View style={{zIndex: 9}}>
                <Header heading="MediPedia"/>
            </View> */}
                        <View style={styles.searchStyle}>
                            <SearchBar
                                inputStyle={{ backgroundColor: 'white' }}
                                containerStyle={{ backgroundColor: '#fff', width: '100%', paddingLeft: 20, paddingRight: 20 }}
                                lightTheme
                                placeholder="Search..."
                                onChangeText={text => this.updateSearch(text)}
                                value={search}
                                platform={Platform.OS}
                            />
                        </View>

                        <View style={styles.scrollContainer}>
                            {

                                this.state.filteredDiseases.map((l, i) => (

                                    <ListItem key={l._id} bottomDivider>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DiseasesInfo', { disease: l._id })}  >
                                            <View style={{ width: '100%' }}>
                                                <ListItem.Content>
                                                    <ListItem.Title>{l.name}</ListItem.Title>
                                                </ListItem.Content>
                                            </View>
                                        </TouchableOpacity>
                                    </ListItem>
                                ))
                            }
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
    },
    scrollContainer: {
        top: 60
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
        // position: 'fixed',
        zIndex: 9,
        top: 30,
        height: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default withNavigationFocus(MediPedia);