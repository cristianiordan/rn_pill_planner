import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const UnitItem = ({ unit, onPress, isSelected }) => {
  if (isSelected) {
    return (
      <Pressable onPress={onPress} style={styles.textContainer}>
        <View style={styles.iconContainer}>
          <Text style={styles.text}>{unit}</Text>
          <MaterialCommunityIcons
            name="check"
            size={24}
            color={GlobalStyles.colors.primary400}
          />
        </View>
      </Pressable>
    );
  }

  return (
    <Pressable onPress={onPress} style={styles.textContainer}>
      <Text style={styles.text}>{unit}</Text>
    </Pressable>
  );
};

export default UnitItem;

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: GlobalStyles.colors.accent500,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: GlobalStyles.colors.accent400,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "white",
    paddingVertical: 10,
    fontSize: 16,
  },
});
