import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';


function BreakfeastRecipesScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../../../assets/app-background.jpg')} style={styles.image} >
        <View style={styles.container}> 
          {/* <Text style={styles.containerText}>Details Screen</Text> */}
          {/* <Text style={styles.containerText}>Barbeque Recipes Screen</Text> */}
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

export default BreakfeastRecipesScreen;