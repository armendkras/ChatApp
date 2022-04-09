import { View, Text, TextInput } from "react-native";
import React, { FC } from "react";
import { SearchIcon } from "../../assets/svgs";
import styles from "./styles";

interface SearchBarProps {
  containerStyle?: {};
  onChangeText?: (value: string) => any;
  icon?: any;
  placeholder: string;
}

const SearchBar: FC<SearchBarProps> = ({
  containerStyle,
  onChangeText,
  icon,
  placeholder,
}) => {
  return (
    <View style={[containerStyle, , styles.container]}>
      <View style={styles.icon}>{icon}</View>
      <TextInput
        onChangeText={onChangeText}
        style={styles.input}
        placeholder={placeholder}
      />
    </View>
  );
};

export default SearchBar;
