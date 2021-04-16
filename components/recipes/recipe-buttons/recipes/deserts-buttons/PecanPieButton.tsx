import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const PecanPieButton = ({ navigation }) => {
    return (
        <View style={styles.recipes} >
            <Button color="black" title="Pecan Pie" onPress={() => navigation.navigate('Pecan Pie')} />
        </View >
    )
}

const styles = StyleSheet.create({
    recipes: {
        padding: 10
    }
});

export default PecanPieButton;