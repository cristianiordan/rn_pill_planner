import { View, Text, StyleSheet } from "react-native";
import MedsButton from "../components/ManageMeds/MedsButton";
import { GlobalStyles } from "../constants/styles";
import { useContext } from "react";
import { MedicineContext } from "../store/medicine-context";

const ScheduleScreen = () => {
  const medicineCtx = useContext(MedicineContext);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <MedsButton
            value={medicineCtx.frequency.value}
            navigateTo="StrengthScreen"
            iconSize={24}
          >
            Frequency
          </MedsButton>
        </View>
        <View style={styles.inputContainer}>
          <MedsButton
            navigateTo="StrengthScreen"
            iconSize={24}
            title="How often"
            value={`${medicineCtx.howOften.value} days`}
          >
            Every
          </MedsButton>
        </View>
        <View style={styles.inputContainer}>
          <MedsButton
            navigateTo="StrengthScreen"
            iconSize={24}
            title="How many times a day"
          >
            {medicineCtx.timesADay.value}
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
