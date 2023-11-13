
import { View} from 'react-native';
import NavMenu from './components/NavMenu';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import routes from './routes';

export default function App() {
  const Stack = createStackNavigator();
  const routeList = routes()

  return (
    <NavigationContainer>
      <View style={{position : 'relative', width : '100%', flex : 1}}>
        <Stack.Navigator initialRouteName="Home">
          {routeList.map((route, index) => (
            <Stack.Screen key={index} name={route.name} component={route.component} options={{ headerShown: false }} />
          ))}
        </Stack.Navigator>
        <NavMenu />
      </View>
    </NavigationContainer>
  );
}

