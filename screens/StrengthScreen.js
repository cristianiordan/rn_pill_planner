import { View, StyleSheet } from "react-native";
import Input from "../components/ManageMeds/Input";
import MedsButton from "../components/ManageMeds/MedsButton";
import { useContext } from "react";
import { MedicineContext } from "../store/medicine-context";

const StrengthScreen = () => {
  const medicineCtx = useContext(MedicineContext);

  const changeUnitHandler = (textValue) => {
    medicineCtx.addStrength(textValue);
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Input
            label="Strength"
            iconSize={0}
            onChangeText={changeUnitHandler}
            value={medicineCtx.strength.value}
            onEndEditing={() => {}}
          />
        </View>
        <View style={styles.inputContainer}>
          <MedsButton navigateTo="UnitsScreen" iconSize={24}>
            Units
          </MedsButton>
        </View>
      </View>
    </View>
  );
};

export default StrengthScreen;

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
