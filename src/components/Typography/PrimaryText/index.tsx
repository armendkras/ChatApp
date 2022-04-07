import { View, Text } from "react-native";
import React, { FC } from "react";

interface PrimaryTextProps {
  value?: string;
  style?: {};
  rest?: any;
}

const PrimaryText: FC<PrimaryTextProps> = ({ value, style, rest }) => {
  return (
    <Text {...rest} style={[{ fontFamily: "Poppins-Regular" }, style]}>
      {value}
    </Text>
  );
};

export default PrimaryText;
