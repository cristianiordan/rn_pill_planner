import { View, Text, FlatList, StyleSheet } from "react-native";
import UnitItem from "../components/ManageMeds/UnitItem";
import { useContext } from "react/";
import { MedicineContext } from "../store/medicine-context";

const UnitsScreen = () => {
  const medicineCtx = useContext(MedicineContext);

  const chooseUnitHandler = (id) => {
    medicineCtx.addUnit(id);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={medicineCtx.allUnits}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <UnitItem
            onPress={chooseUnitHandler.bind(this, itemData.item.id)}
            unit={itemData.item.name}
            isSelected={itemData.item.id === medicineCtx.units.value}
          />
        )}
      />
    </View>
  );
};

export default UnitsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingVertical: 30,
  },
});
