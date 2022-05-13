import { View, Text, Pressable, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { GlobalStyles } from "../../constants/styles";

const MedsButton = ({
  children,
  iconName,
  iconSize,
  iconColor,
  navigateTo,
  value,
  title,
}) => {
  const navigation = useNavigation();
  const pressHandler = () => {
    navigation.navigate(navigateTo);
  };

  return (
    <View>
      {title && <Text style={styles.title}>{title}</Text>}
      <Pressable onPress={pressHandler} style={styles.container}>
        <View style={styles.textContainer}>
          <MaterialCommunityIcons
            name={iconName}
            size={iconSize}
            color={iconColor}
          />
          <Text style={styles.text}>{children}</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.value}>{value}</Text>
          <MaterialCommunityIcons
            name="arrow-right"
            size={iconSize}
            color={GlobalStyles.colors.accent400}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MedsButton;

const styles = StyleSheet.create({
  title: {
    textTransform: "uppercase",
    color: GlobalStyles.colors.accent400,
    marginBottom: 8,
    marginHorizontal: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.accent500,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginHorizontal: 10,
    color: "white",
    fontSize: 16,
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  value: {
    color: GlobalStyles.colors.accent400,
    fontSize: 16,
    marginHorizontal: 8,
  },
});
