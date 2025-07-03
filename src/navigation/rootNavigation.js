import {
  createComponentForStaticNavigation,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const AppStack = createNativeStackNavigator();
import Login from "../screens/login";
import whatsappStatus from "../screens/WhatsappStatus/whatsappStatus";
export default function RootNavigation() {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="Login">
        <AppStack.Screen name="whatsappStatus" component={whatsappStatus} />
        <AppStack.Screen name="Login" component={Login} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
