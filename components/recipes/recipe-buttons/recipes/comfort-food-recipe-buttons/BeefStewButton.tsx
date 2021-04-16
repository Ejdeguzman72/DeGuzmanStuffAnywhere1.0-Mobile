import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const BeefStewButton = ({ navigation }) => {
    return (
        <View style={styles.recipes} >
            <Button color="black" title="Beef Stew" onPress={() => navigation.navigate('Beef Stew')} />
        </View >
    )
}

const styles = StyleSheet.create({
    recipes: {
        padding: 10
    }
});

export default BeefStewButton;