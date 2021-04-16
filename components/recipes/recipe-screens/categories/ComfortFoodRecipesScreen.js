import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import SalisbuySteaksButton from '../../recipe-buttons/recipes/comfort-food-recipe-buttons/SalisburySteaksButton'
import MeatloafButton from '../../recipe-buttons/recipes/comfort-food-recipe-buttons/MeatloafButton';
import BeefStewButton from '../../recipe-buttons/recipes/comfort-food-recipe-buttons/BeefStewButton';
import ChiliButton from '../../recipe-buttons/recipes/comfort-food-recipe-buttons/ChiliButton';
import BeefaroniButton from '../../recipe-buttons/recipes/comfort-food-recipe-buttons/BeefaroniButton';
import MarinaraButton from '../../recipe-buttons/recipes/comfort-food-recipe-buttons/MarinaraButton';
import MeatSauceButton from '../../recipe-buttons/recipes/comfort-food-recipe-buttons/MeatSauceButton';
import MeatballsButton from '../../recipe-buttons/recipes/comfort-food-recipe-buttons/MeatballsButton';

function ComfortFoodRecipesScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../../../assets/app-background.jpg')} style={styles.image} >
        <View style={styles.recipe}> 
          <SalisbuySteaksButton navigation={props.navigation} />
          <MeatloafButton navigation={props.navigation} />
          <BeefStewButton navigation={props.navigation} />
          <ChiliButton navigation={props.navigation} />
          <BeefaroniButton navigation={props.navigation} />
          <MarinaraButton navigation={props.navigation} />
          <MeatSauceButton navigation={props.navigation} />
          <MeatballsButton navigation={props.navigation} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover"
  },
  container: {
    backgroundColor: '#FFF5EE',
    justifyContent: 'center',
  },
  containerText: {
    fontSize: 30,
    fontFamily: 'Roboto',
    textAlign: 'center'
  },
  recipes: {
    padding: 10
  }
})

export default ComfortFoodRecipesScreen;