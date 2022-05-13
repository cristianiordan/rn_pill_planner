import { View, Text, StyleSheet } from "react-native";
import Button from "../components/UI/Button";

const HomeScreen = ({ route, navigation }) => {
  const addMedHandler = () => {
    navigation.navigate("AddMedScreen");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Home Screen</Text>
      </View>
      <View style={styles.innerContainer}>
        <Button onPress={addMedHandler}>Add a med</Button>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingVertical: 10,
  },
});
