import HomeScreen from "../screen/HomeScreen";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
function BottomTabs() {
    return (
      <Tab.Navigator >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "#008E97" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="book-sharp" size={24} color="#008E97" />
              ) : (
                <Ionicons name="book-sharp" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Media"
          component={HomeScreen}
          options={{
            tabBarLabel: "Media",
            headerShown: false,
            tabBarLabelStyle: { color: "#008E97" },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="book-sharp" size={24} color="#008E97" />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Cart"
          component={HomeScreen}
          options={{
            tabBarLabel: "Cart",
            tabBarLabelStyle: { color: "#008E97" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="shoppingcart" size={24} color="#008E97" />
              ) : (
                <AntDesign name="shoppingcart" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

export default BottomTabs