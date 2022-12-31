import Login from './screens/login';
import Signup from './screens/signup';
import Acount from './screens/acount';
import Forgot from './screens/forgotpass';
import Mybutton from './coomponents/button';
import CreatePost from './screens/createpost';
import UpdateProfile from './screens/updateProfile';
import MyMap from './coomponents/maps';
import MyModel from './coomponents/model';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import nearMe from './screens/nearMe';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const MyTabs=()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MyAcount" component={Acount} />
      <Tab.Screen name="Pofile" component={UpdateProfile} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
        <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}} />
        <Stack.Screen name='Forgot' component={Forgot} />
        <Stack.Screen name='Socialo' component={Acount} options={{ headerRight: () => (<Mybutton title='logout' />),headerBackVisible:false }} />
        <Stack.Screen name='CreatePost' component={CreatePost} />
        <Stack.Screen name='UpdateProfile' component={UpdateProfile} />
        <Stack.Screen name='My Maps' component={MyMap} />
        <Stack.Screen name='MyModel' component={MyModel} />
        <Stack.Screen name='Near You' component={nearMe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

 // "android.config.googleMaps.apiKey": "AIzaSyDJwyBG2W0fupPznHadhblQ5ArmD8g2ArI",
   // "ios.config.googleMaps.apiKey": "AIzaSyDJwyBG2W0fupPznHadhblQ5ArmD8g2ArI"