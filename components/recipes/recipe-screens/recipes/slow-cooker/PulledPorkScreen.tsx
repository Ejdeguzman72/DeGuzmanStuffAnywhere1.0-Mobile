import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';


function PulledPorkScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../../../../../assets/app-background.jpg')} style={styles.image} >
        <View style={styles.recipe}> 
          <Text>Ingredients</Text>
          <Text>Boston Pork Butt</Text>
          <Text>Pork Rub</Text>
          <Text>Buns{'\n'}</Text>
        </View>
        <View style={styles.container}>
            <Text>Directions</Text>
            <Text>Apply generous amount of rub onto butt</Text>
            <Text>Place butt into slow cooker</Text>
            <Text>Set on low and allow to sit for 6to 8 hours</Text>
            <Text>Take butt out of slow cooker and place into a pan</Text>
            <Text>Using forks, shred the meat off of the bone</Text>
            <Text>Add BBQ sauce</Text>
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

export default PulledPorkScreen;