import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./pages/home";
import { Passwords } from "./pages/passwords";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarActiveTintColor: "#34a02a",
          tabBarActiveBackgroundColor: "#000",
          tabBarInactiveBackgroundColor: "#000",
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons size={size} color={color} name="home" />;
            }
            return <Ionicons size={size} color={color} name="home-outline" />;
          },

          tabBarStyle: {
            display: "flex",
            borderTopColor: "#34a02a",
          },
        }}
      />
      <Tab.Screen
        name="passwords"
        component={Passwords}
        options={{
          tabBarActiveTintColor: "#34a02a",
          tabBarActiveBackgroundColor: "#000",
          tabBarInactiveBackgroundColor: "#000",
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons size={size} color={color} name="lock-closed" />;
            }

            return (
              <Ionicons size={size} color={color} name="lock-closed-outline" />
            );
          },
          tabBarStyle: {
            display: "flex",
            borderTopColor: "#34a02a",
          },
        }}
      />
    </Tab.Navigator>
  );
}
