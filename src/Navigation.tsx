import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native"
import Ucampus from './Ucampus/Ucampus';
import Gradient from './Gradient';
import App from './QuantityMeasurement/App'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
    return (<NavigationContainer >
        <Tab.Navigator>
            <Tab.Screen name="Quantity Measurement" component={App} />
            <Tab.Screen name="Home" component={Ucampus} options={{ headerShown: false }} />
        </Tab.Navigator>
    </NavigationContainer>

    );
}

export default MyTabs