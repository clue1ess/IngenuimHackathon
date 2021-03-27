import React, { Component , useEffect } from 'react'
import { Card, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import Constants from 'expo-constants';

const list = [
    {
        file: 'file1',
        size: 'size1',
        filepath: 'path'
    },
    {
        file: 'file2',
        size: 'size2',
        filepath: 'path'
    },
    {
        file: 'file3',
        size: 'size3',
        filepath: 'path'
    },
]
export default class DocumentsLogger extends Component {
    state = {
        image: null
    }
    donwloadFile = async (filename, fileRoute) => {
        const fileUri = FileSystem.documentDirectory + filename;
        const url = fileRoute;
      
        let downloadObject = FileSystem.createDownloadResumable(
          url,
          fileUri
        );
        let response = await downloadObject.downloadAsync();
    }
    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
            this.setState({image: result.uri});
        }
    };
    handleDelete = (file) => {
        alert(file);
    }
    render(){
        return(
            <View>
                {
                    list.map((l, i)=>(
                        <Card>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{flex: 5, justifyContent: 'center'}}>
                                        <Text style={{marginBottom: 10}}>
                                            File: { l.file }
                                        </Text>
                                        <Text style={{marginBottom: 10}}>
                                            Size: { l.size }
                                        </Text>
                                    </View>
                                    <View style={{flex: 1}}>
                                        <Button
                                            icon={{ type: 'font-awesome', name: 'trash', color: 'red', size: 15 }}
                                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                            type='clear'
                                            containerStyle={{alignSelf: 'flex-end'}}
                                            onPress={()=> this.handleDelete(l.file)}
                                        />
                                        <Button
                                            icon={{ type: 'font-awesome', name: 'download', color: 'green', size: 15 }}
                                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                            type='clear'
                                            containerStyle={{alignSelf: 'flex-end'}}
                                            onPress={()=> this.donwloadFile(l.file, l.filepath)}
                                        />
                                    </View>
                                </View>                       
                                
                        </Card>

                    ))
                }
                <TouchableOpacity 
                    onPress={()=>this.pickImage()}
                    style={{marginTop: 50, marginBottom: 50, height: 50, justifyContent: 'center', width: '70%', alignItems: 'center', alignSelf: 'center', backgroundColor: 'green'}}>
                    <Text style={{color: '#fff'}}>Upload Document</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
