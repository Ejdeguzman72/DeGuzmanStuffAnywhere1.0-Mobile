import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, ScrollView } from 'react-native';


function ChickenCurryScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <ImageBackground source={require('../../../../../assets/app-background.jpg')} style={styles.image} >
        <View style={styles.recipe}> 
          <Text>Ingredients{'\n'}</Text>
          <Text>Pie Crust</Text>
          <Text>3 cups all-purpose flour</Text>
          <Text>1 teaspoon salt</Text>
          <Text>3/4 cup of vegetable shortening</Text>
          <Text>1 egg</Text>
          <Text>1 tablespoon distilled white vinegar</Text>
          <Text>Onion{'\n'}</Text>
        </View>
        <View style={styles.recipe}>
          <Text>Filling{'\n'}</Text>
          <Text>1 cup of granulated sugar</Text>
          <Text>3 tablespoons of brown sugar</Text>
          <Text>1/2 tablespoons of salt</Text>
          <Text>1 teaspoon of vanilla</Text>
          <Text>3 whole eggs</Text>
          <Text>1 cup of chopped pecans</Text>
        </View>
        <View style={styles.container}>
          <Text>Directions{'\n'}</Text>
          <Text>First whip up the pie crust: Mix the flour and salt in a bowl. Add the shortening and slated butter. Work the butter into the flour usign a dough cutter until the mixture resembles tiny pebbles</Text>
          <Text>Add the egg, 5 tablespoons cold water and the white vinegar. Stir until just combined. Divide the dough in half and chill until needed. (You will only need one half for this recipe, reserve the other half for another use</Text>
          <Text>Next make the filling: Mix the granulated sugar, brown sugar, salt, corn syrup, butter, vanilla and eggs together in a bowl.</Text>
          <Text>Preheat the oven to 350 degrees F. Roll out one dough half on a lightly floured surface to fit your pie pan. Pour the pecans in the bottom of the unbaked pie shell. Pour the syrup mixture over the top. Cover the top and crust lightly/gently with foil</Text>
          <Text>Bake the pie for 30 minutes. Remove the foil, and then continue baking for 20 minutes, being careful not to burn the crust or pecans. The pie should not be overly jiggly when you remove it from the oven (though it will jiggle a bit). If it shakes a lot, cover with foil and bake for an additional 20 minute or until set. Required baking time seems to vary widely with this recipe. Sometimes it takes 50 minutes, sometimes it takes 75!</Text>
          <Text>Allow to cool for several hours or overnight. Serve in thin slivers.</Text>
        </View>
      </ImageBackground>
    </ScrollView>
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

export default ChickenCurryScreen;