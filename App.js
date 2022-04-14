import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './components/home/HomeScreen';
import DetailsScreen from './components/details/DetailsScreen';
import FinanceScreen from './components/finance/FinanceScreen';
import AutoFinanceScreen from './components/finance/auto/AutoFinanceScreen';
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
import ChiliScreen from './components/recipes/recipe-screens/recipes/comfort-food/ChiliScreen'
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
import SalmonHeadSinigangScreen from './components/recipes/recipe-screens/recipes/filipino/SalmonHeadSinigangScreen';
import ChickenCurryScreen from './components/recipes/recipe-screens/recipes/filipino/ChickenCurryScreen';
import GeneralFinanceScreen from './components/finance/general/GeneralFinanceScreen';
import MedicalFinanceScreen from './components/finance/medical/MedicalFinanceScreen';
import MusicScreen from './components/music/MusicScreen';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function ContactInfo() {
  return (
    <Drawer.Screen name="Contacts" component={ContactInfoScreen} />
  )
}

function DrawerNavigation() {
  return (
    <Drawer.Navigator  drawerStyle={{
      backgroundColor: 'rgb(40,44,53)',
    }}
    drawerContentOptions={{
      fontSize: 30,
      activeTintColor: '#fff', /* font color for active screen label */
      activeBackgroundColor: '#68f', /* bg color for active screen */
      inactiveTintColor: 'white', /* Font color for inactive screens' labels */
    }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Books" component={BookRecommendationScreen} />
      <Drawer.Screen name="Details" component={DetailsScreen} />
      <Drawer.Screen name="Finance" component={FinanceScreen} />
      <Drawer.Screen name="Music" component={MusicScreen} />
      <Drawer.Screen name="Restaurants" component={RestaurantRecommendationScreen} />
      <Drawer.Screen name="Contacts" component={ContactInfo} />
      <Drawer.Screen name="Recipes" component={RecipeScreen} />
    </Drawer.Navigator>
  );
}

function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} screenOptions={{ headerShown: false }} />
        <Stack.Screen name="DeGuzmanStuffAnywhere" component={DrawerNavigation} screenOptions={{ headerShown: false }} />
        <Stack.Screen name="Book Recommendations" component={BookRecommendationScreen} />
        <Stack.Screen name="Contact Book" component={ContactInfoScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Finance Info" component={FinanceScreen} />
        <Stack.Screen name="Auto Finance" component={AutoFinanceScreen} />
        <Stack.Screen name="General Finance" component={GeneralFinanceScreen} />
        <Stack.Screen name="Medical Finance" component={MedicalFinanceScreen} />
        <Stack.Screen name="Music Recommendations" component={MusicScreen} />
        <Stack.Screen name="Favorite Restaurants" component={RestaurantRecommendationScreen} />

        <Stack.Screen name="Recipe Book" component={RecipeScreen} />

        <Stack.Screen name="Asian Recipes" component={AsianRecipesScreen} />
        <Stack.Screen name="Pad Thai" component={PadThaiScreen} />

        <Stack.Screen name="Comfort Food Recipes" component={ComfortFoodRecipesScreen} />
        <Stack.Screen name="Salisbury Steaks" component={SalisburySteaksScreen} />
        <Stack.Screen name="Meatloaf" component={MeatloafScreen} />
        <Stack.Screen name="Chili" component={ChiliScreen} />
        <Stack.Screen name="Marinara" component={MarinaraScreen} />
        <Stack.Screen name="Meatballs" component={MeatballsScreen} />
        <Stack.Screen name="Meat Sauce" component={MeatSauceScreen} />
        <Stack.Screen name="Beefaroni" component={BeefaroniScreen} />
        <Stack.Screen name="Beef Stew" component={BeefStewScreen} />

        <Stack.Screen name="Barbeque Recipes" component={BarbequeRecipesScreen} />
        {/* <Stack.Screen name="Breakfeast Recipes" componen={BreakfeastRecipesScreen} /> */}

        <Stack.Screen name="Desert Recipes" component={DesertsRecipesScreen} />
        <Stack.Screen name="Pecan Pie" component={PecanPieScreen} />

        <Stack.Screen name="Filipino Recipes" component={FilipinoRecipesScreen} />
        <Stack.Screen name="Chicken Curry" component={ChickenCurryScreen} />
        <Stack.Screen name="Salmon Head Sinigang" component={SalmonHeadSinigangScreen} />

        <Stack.Screen name="Hispanic Recipes" component={HispanicRecipesScreen} />
        <Stack.Screen name="Fajitas" component={FajitasScreen} />

        <Stack.Screen name="Italian Recipes" component={ItalianRecipesScreen} />
        <Stack.Screen name="Creamy Mushroom Pasta" component={CreamyMushroomPastaScreen} />

        <Stack.Screen name="Seafood Recipes" component={SeaFoodRecipesScreen} />

        <Stack.Screen name="Slow Cooker Recipes" component={SlowCookerRecipesScreen} />
        <Stack.Screen name="Black Eyed Peas" component={BlackEyedPeasScreen} />
        <Stack.Screen name="Pot Roast" component={PotRoastScreen} />
        <Stack.Screen name="Pulled Pork Recipes" component={PulledPorkScreen} />
        <Stack.Screen name="Stuffed Green Peppers" component={StuffedGreenPeppersScreen} />

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