import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import PulledPorkRecipesButton from '../../recipe-buttons/recipes/slow-cooker-recipe-buttons/PulledPorkButton';
import BlackEyedPeasRecipesButton from '../../recipe-buttons/recipes/slow-cooker-recipe-buttons/BlackEyedPeasButton';
import StuffedGreenPeppersRecipesButton from '../../recipe-buttons/recipes/slow-cooker-recipe-buttons/StuffedGreenPeppers';
import PotRoastRecipesButton from '../../recipe-buttons/recipes/slow-cooker-recipe-buttons/PotRoastButton';

function SlowCookerRecipesScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../../../assets/app-background.jpg')} style={styles.image} >
        <View>
          <View style={styles.recipe}>
            <BlackEyedPeasRecipesButton navigation={props.navigation} />
          </View>
          <View style={styles.recipe}> 
            <PulledPorkRecipesButton navigation={props.navigation} />
          </View>
          <View style={styles.recipe}>
            <StuffedGreenPeppersRecipesButton navigation={props.navigation} />
          </View>
          <View style={styles.recipe}>
            <PotRoastRecipesButton navigation={props.navigation} />
          </View>
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
  recipe: {
    padding: 10
  }
})

export default SlowCookerRecipesScreen;