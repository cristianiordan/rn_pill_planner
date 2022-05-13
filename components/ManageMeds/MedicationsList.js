import { FlatList, View, StyleSheet, Text } from "react-native";
import { MedicineContext } from "../../store/medicine-context";
import { useContext } from "react";
import MedicationsItem from "./MedicationItem";

const MedicationsList = ({ onPress }) => {
  const medicineCtx = useContext(MedicineContext);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={medicineCtx.availableMedications}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <MedicationsItem
            onPress={onPress.bind(this, itemData.item.id, itemData.item.name)}
            name={itemData.item.name}
          />
        )}
      />
    </View>
  );
};

export default MedicationsList;
