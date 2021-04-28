import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const SalmonHeadSinigangButton = ({ navigation }) => {
    return (
        <View style={styles.recipes} >
            <Button color="black" title="Salmon Head Sinigang" onPress={() => navigation.navigate('Salmon Head Sinigang')} />
        </View >
    )
}

const styles = StyleSheet.create({
    recipes: {
        padding: 10
    }
});

export default SalmonHeadSinigangButton;