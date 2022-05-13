import { View, Text, Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const MedicationsItem = ({ name, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <View>
          <Text style={styles.text}>{name}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MedicationsItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.accent500,
    padding: 10,
  },
  text: {
    color: "white",
  },
});
