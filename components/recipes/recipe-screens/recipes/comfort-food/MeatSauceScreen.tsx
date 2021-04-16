import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';


function MeatSauceScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../../../../assets/app-background.jpg')} style={styles.image} >
        <View style={styles.recipe}> 
          <Text>Ingredients</Text>
          <Text>1lb of ground beef</Text>
          <Text>Marinara Sauce</Text>
          <Text>Oil</Text>
          <Text>Nature's Seasoning</Text>
        </View>
        <View style={styles.container}>
          <Text>Directions</Text>
          <Text>Add 1 lb of ground beef to the marinara sauce to make a meat sauce. Meat sauce allows the meat to go alot further than in making meatballs to add the ground beef, take about a pound for the above amount of sauce and brown it first in a fry pan to remove the oil. Season with nature's seasoning. After meat is browned, remove the liquid and spoon the meat into the sauce and then stir.</Text>
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
    padding: 10
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

export default MeatSauceScreen;