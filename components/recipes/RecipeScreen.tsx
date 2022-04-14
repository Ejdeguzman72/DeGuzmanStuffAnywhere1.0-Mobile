import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, FlatList } from 'react-native';
import AsianRecipesButton from './recipe-buttons/categories/AsianRecipesButton';
import BarbequeRecipesButton from './recipe-buttons/categories/BarbequeRecipesButton';
import BreakfeastRecipesButton from './recipe-buttons/categories/BreakfeastRecipesButton';
import ComfortFoodRecipesButton from './recipe-buttons/categories/ComfotFoodRecipesButton';
import DesertsRecipesButton from './recipe-buttons/categories/DesertsRecipeButton';
import FilipinoRecipesButton from './recipe-buttons/categories/FilipnoRecipesButton';
import HispanicRecipesButton from './recipe-buttons/categories/HispanicRecipesButton';
import ItalianRecipesButton from './recipe-buttons/categories/ItalianRecipesButton';
import SeaFoodRecipesButton from './recipe-buttons/categories/SeaFoodRecipesButton';
import SlowCookerRecipesButton from './recipe-buttons/categories/SlowCookerRecipesButton';

export default function RecipeScreen(props) {

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <View style={styles.container}>
                    <AsianRecipesButton navigation={props.navigation} />
                </View>
                <View style={styles.container}>
                    <BarbequeRecipesButton navigation={props.navigation} />
                </View>
                <View style={styles.container}>
                    <BreakfeastRecipesButton navigation={props.navigation} />
                </View>
                <View style={styles.container}>
                    <ComfortFoodRecipesButton navigation={props.navigation} />
                </View>
                <View style={styles.container}>
                    <DesertsRecipesButton navigation={props.navigation} />
                </View>
                <View style={styles.container}>
                    <FilipinoRecipesButton navigation={props.navigation} />
                </View>
                <View style={styles.container}>
                    <HispanicRecipesButton  navigation={props.navigation} />
                </View>
                <View style={styles.container}>
                    <ItalianRecipesButton navigation={props.navigation} />
                </View>
                <View style={styles.container}>
                    <SeaFoodRecipesButton navigation={props.navigation} />
                </View>
                <View style={styles.container}>
                    <SlowCookerRecipesButton navigation={props.navigation} />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover"
    },
    container: {
        padding: 10,
        borderStyle: "solid",
        borderRadius: 50
    }
});
