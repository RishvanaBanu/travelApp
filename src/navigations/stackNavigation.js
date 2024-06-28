import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import Header from './Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PlaceScreen from '../screens/PlaceScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const StackNavigation = () => {
  const Home = () => {
    const screenOption = (route) => ({
      header: (props) => {
        <Header {...props} />;
      },

      tabBarIcon: ({ focused }) => {
        let iconName, size, color;
        size = focused ? 26 : 22;
        color = focused ? 'tomato' : 'grey';
        route.name === 'userHome' ? (iconName = 'home') : (iconName = 'heart');

        return (
          <MaterialCommunityIcons name={iconName} size={size} color={color} />
        );
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'grey',
    });

    return (
      <Tab.Navigator screenOptions={({ route }) => screenOption(route)}>
        <Tab.Screen
          options={{ tabBarLabel: 'Home' }}
          name='userHome'
          component={HomeScreen}
        />
        <Tab.Screen
          options={{ tabBarLabel: 'Favorite' }}
          name='favorite'
          component={FavoriteScreen}
        />
      </Tab.Navigator>
    );
  };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='home' component={Home} />
      <Stack.Screen name='placeScreen' component={PlaceScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
