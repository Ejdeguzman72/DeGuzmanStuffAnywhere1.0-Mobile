import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const BeefaroniButton = ({ navigation }) => {
    return (
        <View style={styles.recipes} >
            <Button color="black" title="Beefaroni" onPress={() => navigation.navigate('Beefaroni')} />
        </View >
    )
}

const styles = StyleSheet.create({
    recipes: {
        padding: 10
    }
});

export default BeefaroniButton;