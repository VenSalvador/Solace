import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import ComfortScreen from "../screens/ComfortScreen";
import RelaxScreen from "../screens/RelaxScreen";
import SupportScreen from "../screens/SupportScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={JournalScreen} />
      <Tab.Screen name="Comfort" component={ComfortScreen} />
      <Tab.Screen name="Relax" component={RelaxScreen} />
      <Tab.Screen name="Support" component={SupportScreen} />
    </Tab.Navigator>
  );
}
