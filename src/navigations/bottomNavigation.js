import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import Header from './Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const screenOption = (route) => ({
    header: (props) => {
      <Header {...props} />;
    },
    tabBarIcon: ({ focused }) => {
      let iconName, size, color;
      size = focused ? 26 : 22;
      color = focused ? 'tomato' : 'grey';
      route.name === 'home' ? (iconName = 'home') : (iconName = 'heart');

      return (
        <MaterialCommunityIcons name={iconName} size={size} color={color} />
      );
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'grey',
  });

  return (
    <Tab.Navigator screenOptions={({ route }) => screenOption(route)}>
      <Tab.Screen name='home' component={HomeScreen} />
      <Tab.Screen name='favorite' component={FavoriteScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
