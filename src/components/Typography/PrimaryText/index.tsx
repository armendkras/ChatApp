import { View, Text } from "react-native";
import React, { FC } from "react";

interface PrimaryTextProps {
  value?: string;
  style?: {};
  rest?: any;
}

const PrimaryText: FC<PrimaryTextProps> = ({ value, style, ...rest }) => {
  return (
    <Text style={[{ fontFamily: "Poppins-Regular" }, style]} {...rest}>
      {value}
    </Text>
  );
};

export default PrimaryText;
