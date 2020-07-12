import * as React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RatingPage from "./src/pages/RatingPage/RatingPage";
import SpeedDial from "./src/components/SpeedDial/SpeedDial";

const SpeedDialScreen = () => {
  return (
    <View style={styles.pageStyle}>
      <SpeedDial />
    </View>
  );
};

const RatingScreen = () => {
  return (
    <View style={styles.pageStyle}>
      <RatingPage />
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.bodyStyle}>
      <View style={styles.titleStyle}>
        <Text style={styles.button}>Home Screen</Text>
      </View>
      <View style={styles.contentsStyle}>
        <TouchableOpacity onPress={() => navigation.navigate("SpeedDial")}>
          <Text style={styles.button}>Speed Dial page 바로가기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("RatingPage")}>
          <Text style={styles.button}>Rating page 바로가기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SpeedDial" component={SpeedDialScreen} />
        <Stack.Screen name="RatingPage" component={RatingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  pageStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bodyStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 100,
    backgroundColor: "skyblue",
  },
  contentsStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    height: 200,
    backgroundColor: "yellow",
  },
  button: {
    color: "black",
    backgroundColor: "pink",
    marginTop: 50,
    fontSize: 20,
  },
});
