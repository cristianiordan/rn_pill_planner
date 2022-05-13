import { View, Text, StyleSheet } from "react-native";
import MedsButton from "../components/ManageMeds/MedsButton";
import { GlobalStyles } from "../constants/styles";

const ScheduleScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <MedsButton
            value="Specific Days"
            navigateTo="StrengthScreen"
            iconSize={24}
          >
            Frequency
          </MedsButton>
        </View>
        <View style={styles.inputContainer}>
          <MedsButton
            navigateTo="StrengthScreen"
            iconColor={GlobalStyles.colors.primary400}
            iconSize={24}
            iconName="pill"
            title="How often"
          >
            Strength
          </MedsButton>
        </View>
        <View style={styles.inputContainer}>
          <MedsButton
            navigateTo="StrengthScreen"
            iconColor={GlobalStyles.colors.primary400}
            iconSize={24}
            iconName="pill"
            title="How many times a day"
          >
            Strength
          </MedsButton>
        </View>
      </View>
    </View>
  );
};

export default ScheduleScreen;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#000000",
    flex: 1,
  },
  container: {
    paddingVertical: 10,
  },
  inputContainer: {
    marginVertical: 10,
  },
  listContainer: {
    height: "100%",
  },
});
