import { Pressable, Text, StyleSheet } from "react-native";

const HeaderButton = ({ children, onPress, active }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={[styles.text, !active && styles.textInactive]}>
        {children}
      </Text>
    </Pressable>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({
  text: { color: "white", fontSize: 18 },
  textInactive: { opacity: 0.75 },
});
