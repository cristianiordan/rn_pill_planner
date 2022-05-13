import { View, Text, StyleSheet } from "react-native";
import Input from "../components/ManageMeds/Input";
import MedsButton from "../components/ManageMeds/MedsButton";
import HeaderButton from "../components/ManageMeds/HeaderButton";
import { useLayoutEffect } from "react";
import { GlobalStyles } from "../constants/styles";
import { MedicineContext } from "../store/medicine-context";
import { useContext } from "react";

import MedicationsList from "../components/ManageMeds/MedicationsList";

const AddMedScreen = ({ route, navigation }) => {
  const medicineCtx = useContext(MedicineContext);

  const formisValid =
    medicineCtx.medication.IsValid &&
    medicineCtx.strength.IsValid &&
    medicineCtx.units.IsValid;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          active={formisValid}
          onPress={() => {
            if (formisValid) {
              navigation.navigate("ScheduleScreen");
            }
          }}
        >
          Next
        </HeaderButton>
      ),
      headerLeft: () => (
        <HeaderButton
          onPress={() => {
            navigation.goBack();
          }}
          active={true}
        >
          Cancel
        </HeaderButton>
      ),
    });
  }, [navigation, formisValid]);

  const inputChangeHandler = (inputValue) => {
    medicineCtx.addMedication(inputValue);
  };

  const inputEndEditingHandler = () => {
    medicineCtx.checkMedication();
  };

  const selectMedicationHandler = (id, text) => {
    medicineCtx.chooseMedication(id, text);
  };

  let content = (
    <View style={styles.inputContainer}>
      <MedsButton
        navigateTo="StrengthScreen"
        iconColor={GlobalStyles.colors.primary400}
        iconSize={24}
        iconName="pill"
      >
        Strength
      </MedsButton>
    </View>
  );

  if (!medicineCtx.medication.IsValid) {
    content = (
      <View style={styles.listContainer}>
        <MedicationsList onPress={selectMedicationHandler} />
      </View>
    );
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Input
            title="med info"
            placeholder="Medication Name"
            iconColor={GlobalStyles.colors.primary400}
            iconSize={24}
            iconName="clipboard-text-outline"
            value={medicineCtx.medication.value}
            onChangeText={inputChangeHandler}
            onEndEditing={inputEndEditingHandler}
          />
        </View>
        {content}
      </View>
    </View>
  );
};

export default AddMedScreen;

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
