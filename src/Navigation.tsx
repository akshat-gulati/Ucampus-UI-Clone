import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native"
import Ucampus from './Ucampus/Ucampus';
import Gradient from './Gradient';
import QuantityHome from './QuantityMeasurement/QuantityHome'
import WeightScreen from './QuantityMeasurement/WeightScreen';
import TemperatureScreen from './QuantityMeasurement/TemperatureScreen';
import { createStackNavigator } from '@react-navigation/stack';
import LengthScreen from './QuantityMeasurement/LengthScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// function MyTabs() {
//     return (<NavigationContainer >
//         <Tab.Navigator>
//             <Tab.Screen name="Quantity Measurement" component={StackNavigator} />
//             <Tab.Screen name="Weight" component={Ucampus} options={{ headerShown: false }} />
//         </Tab.Navigator>
//     </NavigationContainer>

//     );
// }

function StackNavigator() {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='QuantityHome'>
        <Stack.Screen name="QuantityHome" component={QuantityHome} 
        options={{title: "Home Screen"}}/>
        <Stack.Screen name="LengthScreen" component={LengthScreen} />
        <Stack.Screen name="WeightScreen" component={WeightScreen} />
        <Stack.Screen name="TemperatureScreen" component={TemperatureScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
    )
  }

export default StackNavigator