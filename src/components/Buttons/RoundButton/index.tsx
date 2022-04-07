import { TouchableOpacity } from "react-native";
import React, { FC } from "react";

interface RoundButtonProps {
  icon?: any;
  size?: number;
  onPress?: () => void;
}

const RoundButton: FC<RoundButtonProps> = ({ icon, size = 40, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: 999,
        width: size,
        height: size,
        backgroundColor: "rgba(0, 0, 0, 0.04)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default RoundButton;
