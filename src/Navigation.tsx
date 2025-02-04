import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native"
import Ucampus from './Ucampus/Ucampus';
import Gradient from './Gradient';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (<NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Ucampus} options={{ headerShown: false }}/>
        </Tab.Navigator>
    </NavigationContainer>

    );
}

export default MyTabs