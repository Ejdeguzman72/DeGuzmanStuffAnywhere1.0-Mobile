import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import ChickenCurryButton from '../../recipe-buttons/recipes/filipino-recipes/ChickenCurryButton';
import SalmonHeadSinigangButton from '../../recipe-buttons/recipes/filipino-recipes/SalmonHeadSinigangButton';


function FilipinoRecipesScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../../../assets/app-background.jpg')} style={styles.image} >
        <View style={styles.container}> 
          {/* <Text style={styles.containerText}>Details Screen</Text> */}
          {/* <Text style={styles.containerText}>Filipino Recipes Screen</Text> */}
          <SalmonHeadSinigangButton  navigation={props.navigation}/>
          <ChickenCurryButton navigation={props.navigation} />
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
  }
})

export default FilipinoRecipesScreen;