import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import PadThaiRecipesButton from '../../recipe-buttons/recipes/asian-recipes/PadThaiButton';


function AsianRecipesScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../../../assets/app-background.jpg')} style={styles.image} >
        <View style={styles.container}> 
          <View style={styles.recipe} >
            <PadThaiRecipesButton navigation={props.navigation} />
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

export default AsianRecipesScreen;