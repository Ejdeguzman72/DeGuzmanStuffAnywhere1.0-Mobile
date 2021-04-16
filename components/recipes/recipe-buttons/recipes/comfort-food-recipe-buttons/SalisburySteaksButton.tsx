import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const SalisbuySteaksButton = ({ navigation }) => {
    return (
        <View style={styles.recipes} >
            <Button color="black" title="Salisbury Steaks" onPress={() => navigation.navigate('Salisbury Steaks')} />
        </View >
    )
}

const styles = StyleSheet.create({
    recipes: {
        padding: 10
    }
});

export default SalisbuySteaksButton;