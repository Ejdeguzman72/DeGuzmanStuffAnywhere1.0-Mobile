import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';


function FajitasScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../../../../assets/app-background.jpg')} style={styles.image} >
        <View style={styles.recipe}> 
            <Text>Ingredients{'\n'}</Text>
            <Text>Beef/Chicken</Text>
            <Text>Two Large Onions</Text>
            <Text>two Large Green Peppers</Text>
            <Text>One Large Red Pepper</Text>
            <Text>One Large Yellow Pepper</Text>
            <Text>Limes, lots of limes</Text>
            <Text>Nature's Seasoning</Text>
            <Text>Crushed Red Pepper Flakes</Text>
            <Text>Tortillas</Text>
        </View>
        <View style={styles.container}>
            <Text>Directions{'\n'}</Text>
            <Text>Slice meat into thin strips</Text>
            <Text>Sprinkle some crushed red pepper flakes on top of the meat</Text>
            <Text>Squeeze limes over the meat (make sure you drain out the seeds)</Text>
            <Text>Mix well and allow to marinate for about an hour (overnight is best)</Text>
            <Text>Slice the onions and peppers</Text>
            <Text>In a little oil, saute the onions and peppers together for a couple of minutes</Text>
            <Text>Remove from pan</Text>
            <Text>Place pan back on stove and place the strips of meat into the pan to cook</Text>
            <Text>When all the meat is cooked, add in the onions and peppers</Text>
            <Text>Add some nature's seasoning and stir for a minute or two to combine the flavors</Text>
            <Text>Place in tortillas</Text>
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

export default FajitasScreen;