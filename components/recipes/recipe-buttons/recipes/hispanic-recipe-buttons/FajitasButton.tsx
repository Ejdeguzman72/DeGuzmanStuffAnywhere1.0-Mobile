import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const FajitasButton = ({ navigation }) => {
    return (
        <View style={styles.recipes} >
            <Button color="black" title="Fajitas" onPress={() => navigation.navigate('Fajitas')} />
        </View >
    )
}

const styles = StyleSheet.create({
    recipes: {
        padding: 10
    }
});

export default FajitasButton;