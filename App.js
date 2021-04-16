import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './components/home/HomeScreen';
import DetailsScreen from './components/details/DetailsScreen';
import RecipeScreen from './components/recipes/RecipeScreen';
import ContactInfoScreen from './components/contact-info/ContactInfoScreen';
import LoginScreen from './components/login/LoginScreen';
import RegisterScreen from './components/register/RegisterScreen';
import BookRecommendationScreen from './components/book-recommendations/BookRecommendatonScreen';
import RestaurantRecommendationScreen from './components/restaurant-recommendations/RestaurantRecommendationScreen';
import AsianRecipesScreen from './components/recipes/recipe-screens/categories/AsianRecipesScreen';
import ComfortFoodRecipesScreen from './components/recipes/recipe-screens/categories/ComfortFoodRecipesScreen';
import BarbequeRecipesScreen from './components/recipes/recipe-screens/categories/BarbequeRecipesScreen';
import BreakfeastRecipesScreen from './components/recipes/recipe-screens/categories/BreakfeastRecipesScreen';
import { startClock } from 'react-native-reanimated';
import DesertsRecipesScreen from './components/recipes/recipe-screens/categories/DesertsRecipesScreen';
import FilipinoRecipesScreen from './components/recipes/recipe-screens/categories/FilipinoRecipesScreen';
import HispanicRecipesScreen from './components/recipes/recipe-screens/categories/HispanicRecipesScreen';
import ItalianRecipesScreen from './components/recipes/recipe-screens/categories/ItalianRecipesScreen';
import SeaFoodRecipesScreen from './components/recipes/recipe-screens/categories/SeaFoodRecipesScreen';
import SlowCookerRecipesScreen from './components/recipes/recipe-screens/categories/SlowCookerRecipesScreen';
import PadThaiScreen from './components/recipes/recipe-screens/recipes/asian/PadThaiScreen';
import SalisburySteaksScreen from './components/recipes/recipe-screens/recipes/comfort-food/SalisburySteaksScreen';
import MeatloafScreen from './components/recipes/recipe-screens/recipes/comfort-food/MeatloafScreen';
import BeefStewScreen from './components/recipes/recipe-screens/recipes/comfort-food/BeeftStewScreen';
import ChiliScreen from './components/recipes/recipe-screens/recipes/comfort-food/ChiliScreen';
import BeefaroniScreen from './components/recipes/recipe-screens/recipes/comfort-food/BeefaroniScreen';
import MarinaraScreen from './components/recipes/recipe-screens/recipes/comfort-food/MarinaraScreen';
import MeatSauceScreen from './components/recipes/recipe-screens/recipes/comfort-food/MeatSauceScreen';
import MeatballsScreen from './components/recipes/recipe-screens/recipes/comfort-food/MeatballsScreen';
import PecanPieScreen from './components/recipes/recipe-screens/recipes/deserts/PecanPieScreen';
import FajitasScreen from './components/recipes/recipe-screens/recipes/hispanic/FajitasScreen';
import CreamyMushroomPastaScreen from './components/recipes/recipe-screens/recipes/italian/CreamyMushroomPastaScreen';
import BlackEyedPeasScreen from './components/recipes/recipe-screens/recipes/slow-cooker/BlackEyedPeasScreen';
import PulledPorkScreen from './components/recipes/recipe-screens/recipes/slow-cooker/PulledPorkScreen';
import StuffedGreenPeppersScreen from './components/recipes/recipe-screens/recipes/slow-cooker/StuffedGreenPeppers';
import PotRoastScreen from './components/recipes/recipe-screens/recipes/slow-cooker/PotRoastScreen';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        {/* <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} /> */}

        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Books" component={BookRecommendationScreen} />

        <Stack.Screen name="Details" component={DetailsScreen} />

        <Stack.Screen name="Restaurants" component={RestaurantRecommendationScreen} />

        <Stack.Screen name="Contact Info" component={ContactInfoScreen} />

        <Stack.Screen name="Recipes" component={RecipeScreen} />

        <Stack.Screen name="Asian Recipes" component={AsianRecipesScreen} />
        <Stack.Screen name="Pad Thai" component={PadThaiScreen} />

        <Stack.Screen name="Barbeque Recipes" component={BarbequeRecipesScreen} />

        <Stack.Screen name="Breakfeast Recipes" component={BreakfeastRecipesScreen} />

        <Stack.Screen name="Comfort Food Recipes" component={ComfortFoodRecipesScreen} />
        <Stack.Screen name="Salisbury Steaks" component={SalisburySteaksScreen} />
        <Stack.Screen name="Meatloaf" component={MeatloafScreen} />
        <Stack.Screen name="Beef Stew" component={BeefStewScreen} />
        <Stack.Screen name="Chili" component={ChiliScreen} />
        <Stack.Screen name="Beefaroni" component={BeefaroniScreen} />
        <Stack.Screen name="Marinara" component={MarinaraScreen} />
        <Stack.Screen name="Meat Sauce" component={MeatSauceScreen} />
        <Stack.Screen name="Meatballs" component={MeatballsScreen} />

        <Stack.Screen name="Desert Recipes" component={DesertsRecipesScreen} />
        <Stack.Screen name="Pecan Pie" component={PecanPieScreen} />

        <Stack.Screen name="Filipino Recipes" component={FilipinoRecipesScreen} />

        <Stack.Screen name="Hispanic Recipes" component={HispanicRecipesScreen} />
        <Stack.Screen name="Fajitas" component={FajitasScreen} />

        <Stack.Screen name="Italian Recipes" component={ItalianRecipesScreen} />
        <Stack.Screen name="Creamy Mushroom Pasta" component={CreamyMushroomPastaScreen} />

        <Stack.Screen name="Seafood Recipes" component={SeaFoodRecipesScreen} />

        <Stack.Screen name="Slow Cooker Recipes" component={SlowCookerRecipesScreen} />
        <Stack.Screen name="Black Eyed Peas" component={BlackEyedPeasScreen} />
        <Stack.Screen name="Pulled Pork Recipes" component={PulledPorkScreen} />
        <Stack.Screen name="Stuffed Green Peppers" component={StuffedGreenPeppersScreen} />
        <Stack.Screen name="Pot Roast" component={PotRoastScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const detailsText = StyleSheet.create({
  container: {
    fontSize: 40
  },
});

export default App;