import React, { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Modal, TextInput, Button } from 'react-native';
import { Card, Paragraph, Title, Divider } from 'react-native-paper';
import AddMusicModal from './AddMusicModal';

import MusicListComponent from './MusicListComponent';

const MusicScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image} >
                <View style={styles.addMusicModal}>
                    <View>
                        < AddMusicModal/>
                    </View>
                </View>
                <View>
                    <MusicListComponent />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        // alignItems: 'center',
        //justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
    },
    text: {
        color: "black"
    },
    card: {
        padding: 20
    },
    addMusicModal: {
        padding: 10
    }
});

export default MusicScreen;