import { View, Text, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/styles";

const Input = ({
  placeholder,
  iconName,
  iconSize,
  iconColor,
  label,
  title,
  value,
  onChangeText,
  onEndEditing,
}) => {
  const inputChangeHandler = (enteredValue) => {
    onChangeText(enteredValue);
  };

  const inputEndEditingHandler = () => {
    onEndEditing();
  };

  return (
    <View>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.container}>
        {iconName ? (
          <MaterialCommunityIcons
            name={iconName}
            size={iconSize}
            color={iconColor}
          />
        ) : (
          <Text style={styles.label}>{label}</Text>
        )}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={GlobalStyles.colors.accent400}
            style={styles.input}
            value={value}
            onChangeText={inputChangeHandler}
            onEndEditing={inputEndEditingHandler}
          />
        </View>
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  title: {
    textTransform: "uppercase",
    color: GlobalStyles.colors.accent400,
    marginBottom: 8,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.accent500,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  label: {
    color: "white",
    fontSize: 16,
  },
  inputContainer: { flex: 1, marginHorizontal: 10 },
  input: {
    fontSize: 16,
    color: "white",
  },
});
