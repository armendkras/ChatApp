import { TouchableOpacity } from "react-native";
import React, { FC } from "react";
import styles from "./style";

interface RoundButtonProps {
  icon?: any;
  size?: number;
  containerStyle?: {};
  onPress?: () => void;
}

const RoundButton: FC<RoundButtonProps> = ({
  icon,
  size = 40,
  onPress,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { width: size, height: size }, containerStyle]}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default RoundButton;
