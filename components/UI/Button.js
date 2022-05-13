import { View, Pressable, Text, StyleSheet } from "react-native";

const Button = ({ children, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    marginHorizontal: 4,
    borderRadius: 8,
    padding: 8,
  },
  innerContainer: {},
  text: {
    color: "white",
    textAlign: "center",
  },
});
