import { View, StyleSheet } from "react-native";
import Input from "./Input";
import MedsButton from "./MedsButton";

const MedsForm = ({
  inputTitle,
  inputLabel,
  inputPlaceholder,
  buttonNavigateTo,
  buttonText,
  iconColor,
  iconSize,
  inputIcon,
  buttonIcon,
  inputType,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          title={inputTitle}
          label={inputLabel}
          placeholder={inputPlaceholder}
          iconColor={iconColor}
          iconSize={iconSize}
          iconName={inputIcon}
        />
      </View>
      <View style={styles.inputContainer}>
        <MedsButton
          navigateTo={buttonNavigateTo}
          iconColor={iconColor}
          iconSize={iconSize}
          iconName={buttonIcon}
        >
          {buttonText}
        </MedsButton>
      </View>
    </View>
  );
};

export default MedsForm;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  inputContainer: {
    marginVertical: 10,
  },
});
