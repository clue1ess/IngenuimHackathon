import { StyleSheet, TextInput, Text, View, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { useState } from 'react';
import React from 'react';
import Header from '../components/header'
import { render } from 'react-dom';
export default class DiseasesInfo extends React.Component{
    constructor(props){
        super(props);  
    } 
    render(){
        const { disease } = this.props.route.params;
        return (
            <View style={{flex: 1, overflow: 'hidden'}}>
                <View style={{zIndex: 9}}>
                    <Header heading="MediPedia"/>
                </View>
                <View style={styles.headerStyle}>
                    <Text style={styles.title}>{ disease }</Text>
                </View>
                <View style={styles.cardContainer}>                    
                        <View style={{paddingBottom: 50, paddingTop: 10}}>
                                <Text style={{paddingTop: 30, textAlign: 'justify'}}>
                            The common cold, also known simply as a cold, is a viral infectious disease of the upper respiratory tract that primarily affects the respiratory mucosa of the nose, throat, sinuses, and larynx.[6][8] Signs and symptoms may appear less than two days after exposure to the virus.[6] These may include coughing, sore throat, runny nose, sneezing, headache, and fever.[3][4] People usually recover in seven to ten days,[3] but some symptoms may last up to three weeks.[7] Occasionally, those with other health problems may develop pneumonia.[3]
        
        Well over 200 virus strains are implicated in causing the common cold, with rhinoviruses being the most common.[13] They spread through the air during close contact with infected people or indirectly through contact with objects in the environment, followed by transfer to the mouth or nose.[3] Risk factors include going to child care facilities, not sleeping well, and psychological stress.[6] The symptoms are mostly due to the body's immune response to the infection rather than to tissue destruction by the viruses themselves.[14] The symptoms of influenza are similar to those of a cold, although usually more severe and less likely to include a runny nose.[6][15]
        
        There is no vaccine for the common cold.[3] The primary methods of prevention are handwashing; not touching the eyes, nose or mouth with unwashed hands; and staying away from sick people.[3] Some evidence supports the use of face masks.[9] There is also no cure, but the symptoms can be treated.[3] Zinc may reduce the duration and severity of symptoms if started shortly after the onset of symptoms.[10] Nonsteroidal anti-inflammatory drugs (NSAIDs) such as ibuprofen may help with pain.[11] Antibiotics, however, should not be used, as all colds are caused by viruses,[16] and there is no good evidence that cough medicines are effective.[6][17]
        
        The common cold is the most frequent infectious disease in humans.[18] Under normal circumstances, the average adult gets two to three colds a year, while the average child may get six to eight.[8][12] Infections occur more commonly during the winter.[3] These infections have existed throughout human history.[19] 
                            </Text>
                        </View>
                </View>            
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    cardContainer: {
        top: 20,
        padding: 20,
        width: '100%',
        overflow: 'hidden'
    },
    headerStyle: {
        backgroundColor: '#fff',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        left: 0,
        right: 0,
        top: 60,
        zIndex: 9
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'cambria'
    }
})
