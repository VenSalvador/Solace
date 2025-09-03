import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import JournalScreen from "../screens/JournalScreen";
import CheckInScreen from "../screens/CheckInScreen";
import RelaxScreen from "../screens/RelaxScreen";
import ResourcesScreen from "../screens/ResourcesScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={JournalScreen} />
      <Tab.Screen name="Comfort" component={CheckInScreen} />
      <Tab.Screen name="Relax" component={RelaxScreen} />
      <Tab.Screen name="Support" component={ResourcesScreen} />
    </Tab.Navigator>
  );
}
