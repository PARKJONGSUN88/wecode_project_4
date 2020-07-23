import * as React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RatingPage from "./src/pages/RatingPage/RatingPage";
import SpeedDialPage from "./src/pages/SpeedDialPage/SpeedDialPage";

const SpeedDialScreen = () => {
  return (
    <View style={styles.pageStyle}>
      <SpeedDialPage />
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
    <SafeAreaView style={styles.container}>
      <View style={styles.titleStyle}>
        <Text style={styles.button}>UI 컴포넌트 모음</Text>
      </View>
      <View style={styles.contentsStyle}>
        <TouchableOpacity onPress={() => navigation.navigate("SpeedDialPage")}>
          <Text style={styles.button}>Speed Dial page 바로가기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("RatingPage")}>
          <Text style={styles.button}>Rating page 바로가기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.titleStyle}>
        <Text style={styles.button}>footer</Text>
      </View>
    </SafeAreaView>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SpeedDialPage" component={SpeedDialScreen} />
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "10%",
    backgroundColor: "skyblue",
  },
  contentsStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "80%",
    backgroundColor: "yellow",
  },
  button: {
    color: "black",
    backgroundColor: "pink",
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
  },
});
