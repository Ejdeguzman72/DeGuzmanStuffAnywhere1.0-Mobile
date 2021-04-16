import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const MarinaraButton = ({ navigation }) => {
    return (
        <View style={styles.recipes} >
            <Button color="black" title="Marinara" onPress={() => navigation.navigate('Marinara')} />
        </View >
    )
}

const styles = StyleSheet.create({
    recipes: {
        padding: 10
    }
});

export default MarinaraButton;