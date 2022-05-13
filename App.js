import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import AddMedScreen from "./screens/AddMedScreen";
import StrengthScreen from "./screens/StrengthScreen";
import UnitsScreen from "./screens/UnitsScreen";
import ScheduleScreen from "./screens/ScheduleScreen";

import { GlobalStyles } from "./constants/styles";
import MedicineContextProvider from "./store/medicine-context";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <MedicineContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: "white",
              headerTitleAlign: "center",
            }}
          >
            <Stack.Screen
              name="ScheduleScreen"
              component={ScheduleScreen}
              options={{ title: "Schedule" }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ title: "Home" }}
            />
            <Stack.Screen
              name="AddMedScreen"
              component={AddMedScreen}
              options={{
                title: "Add Medicine",
              }}
            />
            <Stack.Screen
              name="StrengthScreen"
              component={StrengthScreen}
              options={{ title: "Strength" }}
            />
            <Stack.Screen
              name="UnitsScreen"
              component={UnitsScreen}
              options={{ title: "Units" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </MedicineContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});
